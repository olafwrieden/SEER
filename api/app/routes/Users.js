const express = require('express');
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser
} = require('../controllers/User');
const router = express.Router();
const { isAuthed, Roles } = require('../middleware/utils');

/* Get all users */
router.get('/', isAuthed(Roles.ADMIN), getUsers);

/* Get specific user */
router.get('/:id', isAuthed(Roles.ADMIN), getUserById);

/* Create a new user */
router.post('/', isAuthed(Roles.ADMIN), createUser);

/* Delete specific evidence */
router.delete('/:id', isAuthed(Roles.ADMIN), deleteUser);

module.exports = router;
