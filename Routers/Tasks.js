const express = require("express")
const {GetTasks,createTask,checkTask,deleteTask} = require('../Controllers/TasksController')
const RequireAuth = require('../Middleware/RequireAuth')

const router = express.Router()

router.use(RequireAuth)

router.get('/', GetTasks)
router.post('/', createTask)
router.patch("/:id", checkTask)
router.delete("/:id", deleteTask)



module.exports = router