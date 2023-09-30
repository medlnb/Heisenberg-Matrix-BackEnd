const mongoose = require("mongoose")

const Schema = mongoose.Schema

const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  email: {
    type: String,
    required : true
  },
  isDone: {
    type: Boolean,
    required:true
  },
  type: {
    type: String,
    required:true
  }
},  { timestamps: true })

module.exports = mongoose.model("MatrixNote",noteSchema)