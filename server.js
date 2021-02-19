require('dotenv').config()
//creating an instance of express
const express = require("express")
const mongoosebd = require("mongoose")
const studentModel = require('./Model/model')
// const PORT = 7600

//connecting to mongodb atlas

mongoosebd.connect(process.env.DATABASE_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoosebd.connection.once('open', () => {
  console.log('connected to database successfully....')
}).on('error', () => {
  console.log('Database connection failed')
})


// creatin an object instance
const app = express()

//enabing out responds to return in json format
app.use(express.json())

// listen to the port
app.listen(process.env.PORT, () => {
  console.log(`connecting to port  ${process.env.PORT}`)
  console.log("sudyiosdvjhkdhjkk")
})

