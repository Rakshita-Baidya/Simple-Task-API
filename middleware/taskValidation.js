// Validation middleware based on HTTP method
const taskValidation = (req, res, next) => {
  const method = req.method.toLowerCase();
  const { name, description, status } = req.body;

  // Validate status for POST requests
  switch (method) {
    case "post":
      // POST: Validate name, description, and status
      if (!name || !description || !status) {
        return res
          .status(400)
          .json({ error: "Name, description, and status are required" });
      }
      break;

    // Validate status for PUT requests
    case "put":
      // PUT: Validate name and/or description; reject if status is provided
      if (!name && !description) {
        return res
          .status(400)
          .json({ error: "At least one of name or description is required" });
      }
      if (status) {
        return res
          .status(400)
          .json({ error: "Status cannot be updated via PUT request" });
      }
      break;

    // Validate status for PATCH requests
    case "patch":
      // PATCH: Validate status; reject if name or description is provided
      if (!status) {
        return res.status(400).json({ error: "Status is required" });
      }
      if (name || description) {
        return res.status(400).json({
          error: "Name and description cannot be updated via PATCH request",
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
