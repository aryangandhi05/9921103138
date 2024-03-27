module.exports = (req, res, next) => {
  // Simulate authentication check
  const isAuthenticated = true; // This should be replaced with actual authentication logic

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
