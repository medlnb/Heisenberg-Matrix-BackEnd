const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const MatrixTaskrouter = require("./Routers/MatrixNote")
const Authrouter = require('./Routers/User')
const Tasksrouter = require("./Routers/Tasks")
const Notesrouter = require("./Routers/Notes")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())


app.use("/api/notes", Notesrouter)
app.use("/api/matrixTask", MatrixTaskrouter)
app.use("/api/tasks", Tasksrouter)
app.use("/api/user", Authrouter)


mongoose.connect(process.env.MONGO_URI)
.then(
  app.listen(process.env.PORT, () => {
    console.log(`connected to db & listening to ${process.env.PORT}`)
})  )

