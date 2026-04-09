const express = require("express");
const { routeGuard } = require("../middleware/flowMiddleware");

const router = express.Router();

router.get("/public", (req, res) => {
  res.json({
    success: true,
    message: "Public route reached",
    middlewareFlow: req.flow,
  });
});

router.get("/secure", routeGuard, (req, res) => {
  req.flow.push("handler-secure");
  res.json({
    success: true,
    message: "Secure route reached",
    middlewareFlow: req.flow,
  });
});

module.exports = router;
