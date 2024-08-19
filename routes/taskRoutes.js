const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const taskValidation = require("../middleware/taskValidation");
const taskExists = require("../middleware/taskExists");

// Route to search tasks with keyword
router.get("/tasks/search", taskController.searchTasks);

// Route to filter tasks
router.get("/tasks/filter", taskController.filterTasks);

// Route to get all tasks
router.get("/tasks", taskController.getAllTasks);

// Route to get a task by ID
router.get("/tasks/:id", taskController.getTaskById);

// Route to create a new task with validation
router.post("/tasks", taskValidation, taskController.createTask);

// Route to update a exsisting task by ID and checking validation
router.put("/tasks/:id", taskExists, taskValidation, taskController.updateTask);

// Route to partially update a exsisting task by ID and checking validation
router.patch(
  "/tasks/:id",
  taskExists,
  taskValidation,
  taskController.partiallyUpdateTask
);

// Route to delete a existing task by ID
router.delete("/tasks/:id", taskExists, taskController.deleteTask);

module.exports = router;
