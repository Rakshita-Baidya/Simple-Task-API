const taskService = require("../services/taskService");

const getAllTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

const getTaskById = async (req, res) => {
  const id = req.params.id;
  const task = await taskService.getTaskById(id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
};

const createTask = async (req, res) => {
  const newTask = req.body;
  const createdTask = await taskService.createTask(newTask);
  res.status(201).json(createdTask);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  const task = await taskService.updateTask(id, updatedTask);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
};

const partiallyUpdateTask = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const task = await taskService.partiallyUpdateTask(id, { status });
  if (!task) {
    return res.status(404).json({ error: task.error || "Task not found" });
  }
  res.json(task);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const success = await taskService.deleteTask(id);
  if (!success) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json({ message: "Task deleted successfully" });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  partiallyUpdateTask,
  deleteTask,
};
