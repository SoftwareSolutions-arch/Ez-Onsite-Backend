const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');

router.route('/categories')
  .post(createCategory)
  .get(getCategories);

router.route('/categories/:id')
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;