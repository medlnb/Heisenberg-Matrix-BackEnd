const mongoose = require("mongoose")
const Task = require('../Models/TaskModel')

const GetTasks = async (req,res) => {
  const email = req.user.email
  try {
    const Tasks = await Task.find({ email })
    if (!Tasks)
      return res.status(401).json({ err: "error fetching the tasks" })  
    return res.status(201).json(Tasks)  
  } catch (err) {
    return res.status(501).json(err)  
  } 
}
const createTask = async (req,res) => {
  const email = req.user.email
  try {
    const task = await Task.create({ email,...req.body ,checked:false})
    if (!task)
      return res.status(401).json({ err: "error creating the task" })  
    return res.status(201).json(task)  
  } catch (err) {
    return res.status(501).json(err)  
  } 
}
const checkTask = async (req,res) => {
  const taskId = req.params.id
  try {
    
    const exists = await Task.findById(taskId )
    
    if (!exists)
      return res.status(401).json({ err: "task doesnt exists" })  
    
    const task = await Task.findByIdAndUpdate( taskId , { checked: !exists.checked })
    
    if (!task)
      return res.status(401).json({ err: "error cheching the task" })  
    return res.status(201).json(task)  
  } catch (err) {
    return res.status(501).json(err)  
  } 
}
const deleteTask = async (req,res) => {
  const taskId = req.params.id
  try {
    const task = await Task.findByIdAndRemove(taskId)
    
    if (!task)
      return res.status(401).json({ err: "error cheching the task" })  
    return res.status(201).json(task)  
  } catch (err) {
    return res.status(501).json(err)  
  } 
}

module.exports = {GetTasks,createTask,checkTask,deleteTask}