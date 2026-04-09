const { products } = require("../data/productsStore");

const getAllProducts = (req, res) => {
  res.json({ success: true, data: products });
};

const getProductById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  return res.json({ success: true, data: product });
};

const createProduct = (req, res) => {
  const { name, price, inStock } = req.body;

  if (!name || typeof price !== "number") {
    return res.status(400).json({
      success: false,
      message: "name and numeric price are required",
    });
  }

  const nextId = products.length ? products[products.length - 1].id + 1 : 1;
  const newProduct = {
    id: nextId,
    name,
    price,
    inStock: inStock ?? true,
  };

  products.push(newProduct);
  return res.status(201).json({ success: true, data: newProduct });
};

const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  const { name, price, inStock } = req.body;
  const updatedProduct = {
    ...products[productIndex],
    ...(name !== undefined ? { name } : {}),
    ...(price !== undefined ? { price } : {}),
    ...(inStock !== undefined ? { inStock } : {}),
  };

  products[productIndex] = updatedProduct;
  return res.json({ success: true, data: updatedProduct });
};

const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];
  return res.json({ success: true, data: deletedProduct });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
