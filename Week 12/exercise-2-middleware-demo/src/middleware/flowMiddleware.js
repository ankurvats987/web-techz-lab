const flowStepOne = (req, res, next) => {
  console.log("[FLOW] Step 1 - request received");
  req.flow = ["step-1"];
  next();
};

const flowStepTwo = (req, res, next) => {
  console.log("[FLOW] Step 2 - request preprocessed");
  req.flow.push("step-2");
  next();
};

const routeGuard = (req, res, next) => {
  console.log("[ROUTE GUARD] Route-level middleware executed");
  if (req.query.token !== "lab12") {
    return res.status(401).json({
      success: false,
      message: "Access denied. Provide token=lab12 in query.",
    });
  }

  req.flow.push("route-guard");
  return next();
};

module.exports = {
  flowStepOne,
  flowStepTwo,
  routeGuard,
};
