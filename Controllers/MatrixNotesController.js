const mongoose = require("mongoose")
const MatrixNote = require('../Models/MatrixNoteModel')

const getMatrixTask = async (req, res) => {
  try {
    const email = req.user.email
    const Notes = await MatrixNote.find({email})
    res.status(201).json(Notes)
  } catch (error) {
    console.log(error)
    res.status(501).json({error:"error getting the notes"})
  }
}

const addMatrixTask = async (req, res) => {
   
  try {  
    const email = req.user.email
    const note = await MatrixNote.create({ ...req.body,email,isDone:false })
    res.status(201).json(note)
  } catch (error) {
    console.log(error)
    res.status(501).json({error:error})
  }
}
const deleteMatrixTask = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(401).json({ error: "Wrong id form" })
  
  try {
    const note = await MatrixNote.findOneAndDelete({ _id: req.params.id })
    res.status(200).json(note)
  }
  catch (error) {
    console.log(error)
    res.status(500).json(error)
}
  
}

const updateMatrixTask = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(401).json({ error: "Wrong id form" })
    
    try {
      const note = await MatrixNote.findByIdAndUpdate({ _id: req.params.id }, { ...req.body })
      res.status(201).json(note)
    } catch (error) {
      console.log(error)
    res.status(404).json(error)
    }
}
module.exports = {
  getMatrixTask,
  addMatrixTask,
  deleteMatrixTask,
  updateMatrixTask
}
