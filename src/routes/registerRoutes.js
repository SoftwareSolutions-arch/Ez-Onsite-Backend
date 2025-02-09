const express = require('express');
const router = express.Router();
const userController = require('../controllers/registerController');

router.get('/get-users', userController.getUsers);
router.post('/register', userController.createUser);

module.exports = router;