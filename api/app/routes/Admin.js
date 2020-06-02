const express = require('express');
const { getStats } = require('../controllers/Admin');
const router = express.Router();
const { isAuthed, Roles } = require('../middleware/utils');

/* Get platform statistics */
router.get('/stats', isAuthed(Roles.ADMIN), getStats);

module.exports = router;
