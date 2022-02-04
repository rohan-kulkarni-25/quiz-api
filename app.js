require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;


app.get('/',(req,res) => {
  res.status(200).json({
    success:false,
    data:"Rohan Kulkarni"
  })
})



app.listen(port,() => {
  console.log(`SERVER IS RUNNING ON ${port}`);
})