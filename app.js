const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes for task-related endpoints
app.use(taskRoutes);

// Call error-handling middleware
app.use(errorHandler);

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
