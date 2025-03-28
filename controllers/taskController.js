const taskService = require("../services/taskService");

// Handles GET request to fetch all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

// Handles GET request to fetch a single task by its ID
const getTaskById = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await taskService.getTaskById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch task" });
  }
};

// Handles POST request to create a new task
const createTask = async (req, res) => {
  const newTask = req.body;
  try {
    const createdTask = await taskService.createTask(newTask);
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

// Handles PUT request to update an existing task's name and/or description by its ID
const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  try {
    const task = await taskService.updateTask(id, updatedTask);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

// Handles PATCH request to partially update an existing task's status by its ID
const partiallyUpdateTask = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const task = await taskService.partiallyUpdateTask(id, { status });
    if (!task) {
      return res.status(404).json({ error: task.error || "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to partially update task" });
  }
};

// Handles DELETE request to delete a task by its ID
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await taskService.deleteTask(id);
    if (!success) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};

// Handles GET request to search tasks based on keyword
const searchTasks = async (req, res) => {
  // Extract keyword from query parameters
  const keyword = req.query.keyword;

  try {
    const tasks = await taskService.searchTasks(keyword);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to search tasks" });
  }
};

// Handle request to filter tasks by status or priority
const filterTasks = async (req, res) => {
  const { status, priority } = req.query; // Extract status and priority from query parameters

  const filter = { status, priority };

  try {
    const result = await taskService.filterTasks(filter);
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while filtering tasks" });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  partiallyUpdateTask,
  deleteTask,
  searchTasks,
  filterTasks,
};
