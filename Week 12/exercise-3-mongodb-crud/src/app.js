const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Exercise 3 MongoDB CRUD API is running");
});

app.use("/api/products", productRoutes);

module.exports = app;
