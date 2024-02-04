const express = require("express")
const RequireAuth = require("../Middleware/RequireAuth")
const {
  getMatrixTask,
  addMatrixTask,
  deleteMatrixTask,
  updateMatrixTask
} = require("../Controllers/MatrixNotesController")


const router = express.Router()

router.use(RequireAuth)

router.get("/", getMatrixTask)
router.post("/", addMatrixTask)
router.delete('/:id', deleteMatrixTask)
router.patch('/:id',updateMatrixTask)

module.exports = router