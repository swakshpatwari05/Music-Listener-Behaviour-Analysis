// const express = require('express');
// const router = express.Router();
// const { saveUserData } = require('../controllers/userController');

// router.post('/', saveUserData);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

// POST - Create User
router.post('/', (req, res) => {
  // Log the incoming request body (JSON data)
  console.log("Received user data:", req.body);

  // Pass the request to the controller
  createUser(req, res);
});

module.exports = router;
