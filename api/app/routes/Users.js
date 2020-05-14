const express = require('express');
const { getUsers, getUserById, createUser } = require('../controllers/User');
const router = express.Router();

/* Get all users */
router.get('/', getUsers);

/* Get specific user */
router.get('/:id', getUserById);

/* Create a new user */
router.post('/', createUser);

module.exports = router;
