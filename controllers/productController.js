const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product added" });
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
}