const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    default: false,
    unique: true,
    required: true
  },
  uuid: {
    type: String,
    default: false,
    unique: true,
    required: true
  },
  rank: {
    type: String,
    default: false,
    required: true
  },
  discord: {
    type: String,
    default: false,
    unique: true
  }
});

module.exports = mongoose.model('player', playerSchema);
