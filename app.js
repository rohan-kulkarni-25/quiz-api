require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan')

const port = process.env.PORT;
const Question = require('./question')


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log(`DB CONNECTED SUCCESSFULLY`)).catch(error => console.log(error))


app.get('/getallquestions', async (req, res) => {

  const questions = await Question.find();;
  res.status(200).json({
    success: true,
    message: "Questions",
    question: questions
  })

})

app.post('/addQuestion', async (req, res) => {
  const { questionNumber, question, option1, option2, option3, option4 } = req.body;

  const questionData = {
    questionNumber,
    question,
    option1, option2, option3, option4
  }
  const result = await Question.create(questionData);
  res.status(201).json({
    success: true,
    message: "Question Added Succesfully to Database",
    question: result
  })

})

app.get('/getQuestion/:questionNumber', async (req, res) => {
  const questionNumber = req.params.questionNumber;
  const questionData = await Question.find({ questionNumber })
  res.status(200).json({
    success: true,
    message: "Question Found",
    question: questionData
  })
})


app.listen(port,() => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`)
})



//  API IDEA 
// 2 Routes GET ->  GET ALL THE QUESTIONS ADDED IN DATABASE
// GET -> GET ONE QUESTON ADDED IN DATABASE
// POST -> ADD ONE QUESTION TO DATABASE
