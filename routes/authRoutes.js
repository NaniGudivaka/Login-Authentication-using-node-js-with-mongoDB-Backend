const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User.js');

const router = express.Router();

//signup route

router.post('/signup', async (req, res) =>{
  try{
    const{name, email, password}=req.body;

    if(!name || !email || !password){
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
      }

      const existingUser = await User.findOne({email});

      if(existingUser){
        return res.status(400).json({
          success: false,
          message: 'User already exists'
        });
      }
      

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        name,
        email,
        password: hashedPassword
      });

      await user.save();

      res.status(201).json({
        success: true,
        message: 'User registered successfully'
      });

    

  }catch(error){
    
    res.status(500).json({
      success: false,
      message: 'Server not responding'
    });

    console.log(error);

  }

});

//Login route

router.post('/login', async (req, res) =>{

  try{
    const {email, password} = req.body;

    if(!email || !password){
     return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }
    const user = await User.findOne({email});

    if(!user){
     return res.status(400).json({
      success: false,
      message: 'Invalid email or password'
     });
    }


    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const token = jwt.sign(
      {
        id: user._id
      },

      process.env.JWT_SECRET,

      {
        expiresIn: '1h'
      }
    );

    res.cookie('token', token,{
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      message : 'Login successful',
      // token: token
    });


  }catch(error){

    res.status(500).json({
      success: true,
      message: 'Server not responding', error
    });

  }

});


module.exports = router;