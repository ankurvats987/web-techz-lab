const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Exercise 1 API server is running");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Exercise 1 server running at http://localhost:${PORT}`);
});
