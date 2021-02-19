//creating an instance of mongoose
const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
  Name: {
    type: String,
    require: true
  },
  Course: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true
  },
})

const studentModel = mongoose.model("studentModel", studentSchema)

module.exports = studentModel
