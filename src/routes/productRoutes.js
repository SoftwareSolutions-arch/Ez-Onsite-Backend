const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsBySubCategory
} = require('../controllers/productController');

router.route('/product')
  .post(createProduct)
  .get(getProducts);

router.route('/product/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

router.route('/by-category/:categoryId')
  .get(getProductsByCategory);

router.route('/by-subcategory/:subCategoryId')
  .get(getProductsBySubCategory);

module.exports = router;