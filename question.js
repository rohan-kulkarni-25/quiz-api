const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
    required: [true, "Please provide question number"]
  },
  question: {
    type: String,
    required: [true, "Please provide question"]
  },
  option1: {
    type: String,
    required: [true, "Please provide all 4 options"]
  },
  option2: {
    type: String,
    required: [true, "Please provide all 4 options"]
  },
  option3: {
    type: String,
    required: [true, "Please provide all 4 options"]
  },
  option4: {
    type: String,
    required: [true, "Please provide all 4 options"]
  }
})

module.exports = mongoose.model('Question', questionSchema)