const mongoose = require("mongoose")
const Note = require("../Models/NoteModel")

const GetNotes = async (req,res) => {
  const email = req.user.email
  try {
    const Notes = await Note.find({ email })
    if (!Notes)
      return res.status(401).json({ err: "error fetching the tasks" })  
    return res.status(201).json(Notes)  
  } catch (err) {
    return res.status(501).json(err)  
  } 
}
const createNote = async (req,res) => {
  const email = req.user.email
  try {
    const note = await Note.create({ email,...req.body ,checked:false})
    if (!note)
      return res.status(401).json({ err: "error creating the task" })  
    return res.status(201).json(note)  
  } catch (err) {
    return res.status(501).json(err)  
  } 
}

const deleteNote = async (req,res) => {
  const noteId = req.params.id
  try {
    const note = await Note.findByIdAndRemove(noteId)
    
    if (!note)
      return res.status(401).json({ err: "error cheching the task" })  
    return res.status(201).json(note)  
  } catch (err) {
    return res.status(501).json(err)  
  } 
}

module.exports = {GetNotes,createNote,deleteNote}