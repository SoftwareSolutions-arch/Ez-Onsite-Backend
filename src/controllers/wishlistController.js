const wishlistService = require('../services/wishlistService');
const asyncHandler = require('../middlewares/asyncHandler');

exports.getWishlist = asyncHandler(async (req, res) => {
  const { userId } = req.body; // Get userId from request body
  const wishlist = await wishlistService.getWishlist(userId);
  res.json(wishlist);
});

exports.addToWishlist = asyncHandler(async (req, res) => {
  const { userId, productId } = req.body; // Get userId and productId from request body
  const wishlist = await wishlistService.addToWishlist(userId, productId);
  res.status(201).json(wishlist);
});

exports.removeFromWishlist = asyncHandler(async (req, res) => {
  const { userId } = req.body; // Get userId from request body
  await wishlistService.removeFromWishlist(userId, req.params.productId);
  res.json({ message: 'Product removed from wishlist' });
});

exports.clearWishlist = asyncHandler(async (req, res) => {
  const { userId } = req.body; // Get userId from request body
  await wishlistService.clearWishlist(userId);
  res.json({ message: 'Wishlist cleared successfully' });
});