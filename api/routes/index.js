
var express = require('express');
var router = express.Router();

var authCtrl = require('../controllers/authController');

router.post('/auth/login', authCtrl.logIn);

module.exports = router;
