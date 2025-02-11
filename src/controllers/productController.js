const productService = require('../services/productService');
const asyncHandler = require('../middlewares/asyncHandler');

exports.createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json(product);
});

exports.getProducts = asyncHandler(async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
});

exports.getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.json(product);
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.json(product);
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.json({ message: 'Product deleted successfully' });
});

exports.getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await productService.getProductsByCategory(req.params.categoryId);
  res.json(products);
});

exports.getProductsBySubCategory = asyncHandler(async (req, res) => {
  const products = await productService.getProductsBySubCategory(req.params.subCategoryId);
  res.json(products);
});