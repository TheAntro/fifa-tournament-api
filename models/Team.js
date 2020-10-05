const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
    unique: true,
    trim: true,
  },
  league: {
    type: String,
    required: [true, 'Please add league'],
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  founded: {
    type: Number,
  },
  coach: {
    type: String,
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'Please add star rating between 0 and 5'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Team', TeamSchema);
