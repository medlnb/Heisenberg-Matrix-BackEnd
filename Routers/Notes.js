const express = require("express")
const {GetNotes,createNote,deleteNote} = require('../Controllers/NotesController')
const RequireAuth = require('../Middleware/RequireAuth')

const router = express.Router()

router.use(RequireAuth)

router.get('/', GetNotes)
router.post('/', createNote)
router.delete("/:id", deleteNote)



module.exports = router