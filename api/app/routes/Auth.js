const express = require('express');
const {
  login,
  getProfile,
  logout,
  createUser
} = require('../controllers/User');
const router = express.Router();
const { isAuthed } = require('../middleware/utils');

/* Post login credentials */
router.post('/login', login);

/* Post registration credentials */
router.post('/register', createUser);

/* Get profile */
router.get('/profile', isAuthed, getProfile);

/* Log out */
router.get('/logout', isAuthed, logout);

module.exports = router;
