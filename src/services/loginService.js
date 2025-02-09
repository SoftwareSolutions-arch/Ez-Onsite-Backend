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
        if (!user.token || user.token !== token) {
            user.token = token;
            await user.save();
        }
       
        return { success: true, message: "Login successful", token };
    } catch (error) {
        return { success: false, message: "Server error", error: error.message };
    }
};

exports.logoutUser = async (token) => {
    try {
        const user = await User.findOne({ token });

        if (!user) {
            return false;
        }

        user.token = null; // Clear token from DB
        await user.save();

        return true;
    } catch (error) {
        return false;
    }
};

