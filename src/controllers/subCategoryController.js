const subCategoryService = require('../services/subCategoryService');
const asyncHandler = require('../middlewares/asyncHandler');

exports.createSubCategory = asyncHandler(async (req, res) => {
  const subCategory = await subCategoryService.createSubCategory(req.body);
  res.status(201).json(subCategory);
});

exports.getSubCategories = asyncHandler(async (req, res) => {
  const subCategories = await subCategoryService.getAllSubCategories();
  res.json(subCategories);
});

exports.getSubCategoriesByCategory = asyncHandler(async (req, res) => {
  const subCategories = await subCategoryService.getSubCategoriesByCategory(req.params.categoryId);
  res.json(subCategories);
});

exports.updateSubCategory = asyncHandler(async (req, res) => {
  const subCategory = await subCategoryService.updateSubCategory(req.params.id, req.body);
  res.json(subCategory);
});

exports.deleteSubCategory = asyncHandler(async (req, res) => {
  await subCategoryService.deleteSubCategory(req.params.id);
  res.json({ message: 'SubCategory deleted successfully' });
});