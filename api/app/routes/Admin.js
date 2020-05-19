const express = require('express');
const { getStats } = require('../controllers/Admin');
const router = express.Router();

/* Get platform statistics */
router.get('/stats', getStats);

module.exports = router;
