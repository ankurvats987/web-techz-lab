const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[GLOBAL LOGGER] ${timestamp} ${req.method} ${req.url}`);
  next();
};

module.exports = requestLogger;
