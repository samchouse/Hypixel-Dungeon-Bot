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
  }
});

module.exports = mongoose.model('player', playerSchema);
