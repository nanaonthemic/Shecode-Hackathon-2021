const express = require('express');
const router = express.Router();

var auth_controller = require('../controllers/auth.controller');
var user_controller = require('../controllers/user.controller');

router.post('/login', auth_controller.post_Login);

router.post('/signup', auth_controller.post_Signin, user_controller.user_create);

router.post('/password', auth_controller.forgetpassword, user_controller.changePassword)

module.exports = router; 