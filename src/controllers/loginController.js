const authService  = require('../services/loginService');

exports.loginUser = async (req, res) => {
  try {
      const { email, password } = req.body;
      
      if (!email || !password) {
          return res.status(400).json({ message: "All fields are required" });
      }

      // Call service function to authenticate user
      const { success, message, token } = await authService.authenticateUser(email, password);

      if (!success) {
          return res.status(400).json({ message });
      }

      res.status(200).json({ 
        status: 'success',
        message:message,
        token : token
        });
  } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
  }
  
};

exports.logoutUser = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(400).json({ message: "Token is required" });
        }

        const success = await authService.logoutUser(token);

        if (!success) {
            return res.status(400).json({ message: "Logout failed" });
        }

        res.status(200).json({ 
            status:"success",
            message: "Logged out successfully" 
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};