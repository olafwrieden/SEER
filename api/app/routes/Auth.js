const express = require('express');
const { login, getProfile } = require('../controllers/User');
const router = express.Router();

/* Post login credentials */
router.post('/login', login);

/* Get profile */
router.get('/profile', getProfile);

module.exports = router;
