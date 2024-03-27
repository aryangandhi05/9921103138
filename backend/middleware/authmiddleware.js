module.exports = (req, res, next) => {
  // Simulate authentication check
  const isAuthenticated = true; 

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
