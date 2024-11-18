// // controllers/userController.js
// const User = require('../models/User');
// const asyncHandler = require('../middleware/asyncHandler');

// // @desc    Save user data
// // @route   POST /api/users
// // @access  Public
// exports.saveUserData = asyncHandler(async (req, res) => {
//   const userData = req.body;
//   const newUser = new User(userData);
//   await newUser.save();
//   res.status(201).json({ message: 'User data saved successfully' });
// });

const User = require('../models/SurveyResults');

// POST - Create User
const createUser = async (req, res) => {
  try {
    // Log the incoming request body (JSON data)
    console.log("Received user data:", req.body);

    // Create a new user from the request body
    const user = new User(req.body);

    // Save the user to the database
    await user.save();

    // Send a success response back
    res.status(201).json({ message: 'User created successfully', data: user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createUser };
