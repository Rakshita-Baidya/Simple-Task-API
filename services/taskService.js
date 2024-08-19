const fs = require("fs");
const path = require("path");
const tasksPath = path.join(__dirname, "../data/tasks.json");
let tasks = [];

// Read tasks from file
fs.readFile(tasksPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading tasks file:", err);
    return;
  }
  try {
    tasks = JSON.parse(data);
  } catch (parseErr) {
    console.error("Error parsing JSON data:", parseErr);
  }
});

// Get all tasks
const getAllTasks = async () => {
  return tasks;
};

// Get task by ID
const getTaskById = async (id) => {
  return tasks.find((task) => task.id === parseInt(id));
};

// Create a new task with auto-incremented ID
const createTask = async (newTask) => {
  const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  const task = {
    id,
    name: newTask.name,
    description: newTask.description,
    createdAt: new Date().toLocaleString(),
    priority: newTask.priority || "normal",
    status: newTask.status || "to_do",
  };
  tasks.push(task);

  // Save tasks to file
  fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      console.error("Error writing tasks file:", err);
    }
  });
  return task;
};

// Update an existing task (name & description)
const updateTask = async (id, updatedTask) => {
  const index = tasks.findIndex((task) => task.id === parseInt(id));
  if (index === -1) return null;

  const { name, description, priority } = updatedTask;

  // Define valid priority values
  const validPriority = ["low", "normal", "high"];

  // Update fields if provided and valid
  if (name) tasks[index].name = name;
  if (description) tasks[index].description = description;

  if (priority) {
    // Check if the provided priority is valid
    if (validPriority.includes(priority)) {
      tasks[index].priority = priority;
    } else {
      return { error: "Invalid priority value" };
    }
  }

  // Save updated tasks to file
  fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), (err) => {
    if (err) console.error("Error writing tasks file:", err);
  });

  return tasks[index];
};

// Partially update a task (status only)
const partiallyUpdateTask = async (id, updatedFields) => {
  const index = tasks.findIndex((task) => task.id === parseInt(id));
  if (index === -1) {
    return null;
  }

  const validStatuses = ["done", "to_do", "doing"];

  if (
    updatedFields.hasOwnProperty("status") &&
    validStatuses.includes(updatedFields.status)
  ) {
    tasks[index].status = updatedFields.status;
  } else {
    return { error: "Invalid status or no status provided" };
  }

  // Save updated tasks to file
  fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      console.error("Error writing tasks file:", err);
    }
  });
  return tasks[index];
};

// Delete a task by ID
const deleteTask = async (id) => {
  const index = tasks.findIndex((task) => task.id === parseInt(id));
  if (index === -1) {
    return null;
  }

  tasks.splice(index, 1);

  // Save updated tasks to file
  fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      console.error("Error writing tasks file:", err);
    }
  });
  return true;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  partiallyUpdateTask,
  deleteTask,
};
