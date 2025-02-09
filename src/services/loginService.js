const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/registerModel");

exports.authenticateUser = async (email, password) => {
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return { success: false, message: "User Doesn't exist" };
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { success: false, message: "Invalid email or password" };
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        console.log('token', token);

        return { success: true, message: "Login successful", token };
    } catch (error) {
        return { success: false, message: "Server error", error: error.message };
    }
};

