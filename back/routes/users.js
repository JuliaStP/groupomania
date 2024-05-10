var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/', userCtrl.login);

module.exports = router;
