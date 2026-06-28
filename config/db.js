const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () =>{
  try{
    const MONGO_URL = process.env.MONGO_URL;
   await mongoose.connect(MONGO_URL);
   console.log('MongoDB Connected');

  }catch(error){
    console.log('MongoDB connection failed', error);
    process.exit(1);

  }
};

module.exports = connectDB;

