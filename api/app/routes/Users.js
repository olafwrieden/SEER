const express = require('express');
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser
} = require('../controllers/User');
const router = express.Router();

/* Get all users */
router.get('/', getUsers);

/* Get specific user */
router.get('/:id', getUserById);

/* Create a new user */
router.post('/', createUser);

/* Delete specific evidence */
router.delete('/:id', deleteUser);

module.exports = router;
