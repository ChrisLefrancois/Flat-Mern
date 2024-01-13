const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONDO_DB

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove useCreateIndex option
});

const db = mongoose.connection;

// Event handling for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

// Event handling for connection errors
db.on('error', (err) => {
  console.error(`MongoDB Atlas connection error: ${err}`);
});

module.exports = db;
