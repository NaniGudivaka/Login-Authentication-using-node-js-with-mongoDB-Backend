const express = require('express');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');


dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials:true
}));
app.use(cookieParser());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    message: 'Too many login/signup attempts. Please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// app.use(authLimiter);

//signup route

app.use('/auth', authLimiter, authRoutes);

//login route
app.use('/auth', authLimiter, authRoutes);


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log(`Server is connected and running on ${PORT}`);
});