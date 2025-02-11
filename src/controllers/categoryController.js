const categoryService = require('../services/categoryService');
const asyncHandler = require('../middlewares/asyncHandler');

exports.createCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json(category);
});

exports.getCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
});

exports.updateCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.updateCategory(req.params.id, req.body);
  res.json(category);
});

exports.deleteCategory = asyncHandler(async (req, res) => {
  await categoryService.deleteCategory(req.params.id);
  res.json({ message: 'Category deleted successfully' });
});