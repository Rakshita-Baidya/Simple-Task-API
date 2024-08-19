const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const taskValidation = require("../middleware/taskValidation");
const taskExists = require("../middleware/taskExists");

router.get("/tasks", taskController.getAllTasks);
router.get("/tasks/:id", taskController.getTaskById);

router.post("/tasks", taskValidation, taskController.createTask);

router.put("/tasks/:id", taskExists, taskValidation, taskController.updateTask);

router.patch(
  "/tasks/:id",
  taskExists,
  taskValidation,
  taskController.partiallyUpdateTask
);

router.delete("/tasks/:id", taskExists, taskController.deleteTask);

module.exports = router;
