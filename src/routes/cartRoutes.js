const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart
} = require('../controllers/cartController');

router.route('/addCard')
  .get(getCart)
  .post(addToCart)
  .delete(clearCart);

router.route('/items/:itemId')
  .patch(updateCartItem)
  .delete(removeCartItem);

module.exports = router;