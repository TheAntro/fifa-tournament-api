const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
