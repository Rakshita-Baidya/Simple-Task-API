const taskService = require("../services/taskService");

// check if task exists
module.exports = async (req, res, next) => {
  const { id } = req.params;
  const task = await taskService.getTaskById(id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  next();
};
