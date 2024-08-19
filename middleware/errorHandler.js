// Error-handling middleware for Express.js
module.exports = (err, req, res, next) => {
  // Log the error details to the console
  console.error(err);

  // Set the HTTP status code if provided, otherwise default to 500 (Internal Server Error)
  res
    .status(err.status || 500)
    // Send a JSON response with the error message
    .json({ error: err.message || "Internal Server Error" });
};
