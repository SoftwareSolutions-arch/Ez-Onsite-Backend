const userService = require('../services/registerService');

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json({ 
      status: 'success',
      message: 'User created successfully',
      data: newUser
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};