const mongoose = require("mongoose")

const Schema = mongoose.Schema

const noteschema = new Schema({
  content: {
    type: String,
    required: true
  }, 
  date: {
    type: Object,
    required:true
  },
  email: {
    type: String,
    required : true
  },
  folder: {
    type: String
  }
})

module.exports = mongoose.model("Note",noteschema)