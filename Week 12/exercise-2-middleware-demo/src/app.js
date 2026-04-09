const express = require("express");
const requestLogger = require("./middleware/requestLogger");
const { flowStepOne, flowStepTwo } = require("./middleware/flowMiddleware");
const demoRoutes = require("./routes/demoRoutes");

const app = express();
const PORT = 3002;

app.use(express.json());

// Application-level middleware (global).
app.use(requestLogger);
app.use(flowStepOne);
app.use(flowStepTwo);

app.get("/", (req, res) => {
  req.flow.push("handler-root");
  res.send("Exercise 2 middleware server is running");
});

app.use("/api", demoRoutes);

app.listen(PORT, () => {
  console.log(`Exercise 2 server running at http://localhost:${PORT}`);
  console.log("Try /api/public and /api/secure?token=lab12");
});
