const express = require('express');
const { login, getProfile, logout } = require('../controllers/User');
const router = express.Router();

/* Post login credentials */
router.post('/login', login);

/* Get profile */
router.get('/profile', getProfile);

/* Log out */
router.get('/logout', logout);

module.exports = router;
