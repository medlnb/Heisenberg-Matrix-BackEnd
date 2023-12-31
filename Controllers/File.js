const File = require("../Models/File")


const CreateFile = async (req, res) => {
  const {Module,Chapter,Teacher,Type,Link,DescriptionClass,ModuleDescription,title} = req.body
  
  const file = await File.create({Module,Chapter,Teacher,Type,Link,DescriptionClass,ModuleDescription,title}) 

  if (!file)
    return res.status(404).json({ err: "Error Creating the File" })
  
  return res.status(201).json(file)
}

const GetModules = async (req, res) => { 
  
  const Modules = await File.find()
  const groupedData = []
  const moduleIndexes = new Map()
  Modules.forEach(item => {
    const { Module } = item
  if (!moduleIndexes.has(Module)) {
    moduleIndexes.set(Module, groupedData.length)
    groupedData.push([])
  }
  const index = moduleIndexes.get(Module)
  groupedData[index].push(item)
  })
  res.status(201).json(groupedData)
}
module.exports = {
  CreateFile,GetModules
}