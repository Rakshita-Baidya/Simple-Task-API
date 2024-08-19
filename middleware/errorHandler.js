module.exports = (err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
};
