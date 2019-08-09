const mongoose = require('mongoose');
const { Schema } = mongoose;

const memberSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  imgURL: {
    type: String
  },
  Occupation: {
    type: String,
    required: true
  },
  Bio: {
    type: String,
    required: true
  },
  socialMedia: {
    type: Boolean,
    required: true
  },
  Twitter: {
    type: String
  },
  Facebook: {
    type: String
  },
  LinkedIn: {
    type: String
  },
  Github: {
    type: String
  }
});

const memberModel = mongoose.model('members', memberSchema);

module.exports = memberModel;
