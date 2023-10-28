const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const blogController = require('../Controllers/blogcontroller');

router.post('/add-user', userController.addUser);
router.post('/login', userController.loginUser);


module.exports = router;
