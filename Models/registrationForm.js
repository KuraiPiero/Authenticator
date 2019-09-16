const mongoose = require("mongoose");

const registrationForm = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  lastName: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  userName: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  genre: {
    type: String,
    required: true,
    min: 3
  },
  adress: {
    type: String,
    required: true,
    max: 255,
    min: 10
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("registrationForm", registrationForm);
