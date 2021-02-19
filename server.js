require('dotenv').config()
//creating an instance of express
const express = require("express")
const mongoosebd = require("mongoose")
const studentModel = require('./Model/model')
// const PORT = 7600

// creatin an object instance
const app = express()

//enabing out responds to return in json format
app.use(express.json())

// listen to the port
app.listen(process.env.PORT, () => {
  console.log(`connecting to port  ${process.env.PORT}`)
})

