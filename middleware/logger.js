module.exports = (req, res, next) => {
  // Log the HTTP method and URL of the request
  console.log(`${req.method} ${req.url}`);

  // Pass control to the next middleware or route handler
  next();
};
