const {Router} = require('express');

const router = Router();

const {
  createUser,
  showAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../controllers/users');

//CRUD
router.post('/users', createUser);
router.get('/users', showAllUsers);
router.get('/users/:userId', getUserById);
router.patch('/users/:userId', updateUserById);
router.delete('/users/:userId', deleteUserById);

module.exports = router;
