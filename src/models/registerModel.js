const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: { type: String, default: null } // JWT token
});

module.exports = mongoose.model('User', UserSchema);