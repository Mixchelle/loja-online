
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);

router.post('/login', userController.getUser);

router.put('/:userId', userController.updateUser);
router.get('/users', userController.getAllUsers);


module.exports = router;
