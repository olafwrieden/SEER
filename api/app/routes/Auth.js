const express = require('express');
const {
  login,
  getProfile,
  logout,
  createUser
} = require('../controllers/User');
const router = express.Router();

/* Post login credentials */
router.post('/login', login);

/* Post registration credentials */
router.post('/register', createUser);

/* Get profile */
router.get('/profile', getProfile);

/* Log out */
router.get('/logout', logout);

module.exports = router;
