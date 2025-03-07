const express = require('express');
const router = express.Router();
const {
  createSubCategory,
  getSubCategories,
  getSubCategoriesByCategory,
  updateSubCategory,
  deleteSubCategory
} = require('../controllers/subCategoryController');

router.route('/subcategories')
  .post(createSubCategory)
  .get(getSubCategories);

router.route('/subcategories/:categoryId')
  .get(getSubCategoriesByCategory);

router.route('/subcategories/:id')
  .put(updateSubCategory)
  .delete(deleteSubCategory);

module.exports = router;