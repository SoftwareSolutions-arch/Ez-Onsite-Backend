const cartService = require('../services/cartService');
const asyncHandler = require('../middlewares/asyncHandler');

exports.getCart = asyncHandler(async (req, res) => {
  const { userId } = req.body; // Get userId from request body
  const cart = await cartService.getCart(userId);
  res.json(cart);
});

exports.addToCart = asyncHandler(async (req, res) => {
  const { userId, productId, quantity } = req.body; // Get userId, productId, and quantity from request body
  const cart = await cartService.addToCart(userId, productId, quantity);
  res.status(201).json(cart);
});

exports.updateCartItem = asyncHandler(async (req, res) => {
  const { userId, quantity } = req.body; // Get userId and quantity from request body
  const cart = await cartService.updateCartItem(userId, req.params.itemId, quantity);
  res.json(cart);
});

exports.removeCartItem = asyncHandler(async (req, res) => {
  const { userId } = req.body; // Get userId from request body
  await cartService.removeCartItem(userId, req.params.itemId);
  res.json({ message: 'Item removed from cart' });
});

exports.clearCart = asyncHandler(async (req, res) => {
  const { userId } = req.body; // Get userId from request body
  await cartService.clearCart(userId);
  res.json({ message: 'Cart cleared successfully' });
});