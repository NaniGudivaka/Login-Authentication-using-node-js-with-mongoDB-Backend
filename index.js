const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials:true
}));
app.use(cookieParser());



const PORT= process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log(`Server is connected and running on ${PORT}`);
});