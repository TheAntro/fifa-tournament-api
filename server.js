const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);