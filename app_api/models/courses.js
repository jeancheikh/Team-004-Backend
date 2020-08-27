const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  upVotes: {
    type: Number,
    'default': 0,
    min: 0
  },
  downVotes: {
    type: Number,
    'default': 0,
    min: 0
  },
  duration: String,
  category: [String],
  description: String,
  filePath: {
    type: String,
    required: true
  },
  view: Number
});

mongoose.model('Course', courseSchema);
