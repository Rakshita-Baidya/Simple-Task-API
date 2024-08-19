// Validation middleware based on HTTP method
const taskValidation = (req, res, next) => {
  const method = req.method.toLowerCase();
  const { name, description, priority, status } = req.body;

  // Validate status for POST requests
  switch (method) {
    case "post":
      // POST: Validate name and description
      if (!name || !description) {
        return res
          .status(400)
          .json({ error: "Name and description are required" });
      }
      break;

    // Validate status for PUT requests
    case "put":
      // PUT: Validate name, description, and/or priority; reject if status is provided
      if (!name && !description && !priority) {
        return res.status(400).json({
          error: "At least one of name, description, or priority is required",
        });
      }
      if (status) {
        return res
          .status(400)
          .json({ error: "Status cannot be updated via PUT request" });
      }
      break;

    // Validate status for PATCH requests
    case "patch":
      // PATCH: Validate status; reject if name, description, or priority is provided
      if (!status) {
        return res.status(400).json({ error: "Status is required" });
      }
      if (name || description || priority) {
        return res.status(400).json({
          error:
            "Name, description, and priority cannot be updated via PATCH request",
        });
      }
      break;

    default:
      // Handle unsupported methods
      return res.status(405).json({ error: "Method not allowed" });
  }

  // Proceed to the next middleware or route handler
  next();
};

module.exports = taskValidation;
