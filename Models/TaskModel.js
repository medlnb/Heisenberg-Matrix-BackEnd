const mongoose = require("mongoose")

const Schema = mongoose.Schema

const taskschema = new Schema({
  title: {
    type: String,
    required: true
  }, 
  date: {
    type: Object,
    required:true
  },
  checked: {
    type: Boolean,
    require: true
  },
  email: {
    type: String,
    required : true
  },
  folder: {
    type: String
  }
})

module.exports = mongoose.model("Task",taskschema)