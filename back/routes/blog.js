var express = require('express');
var router = express.Router();

const blogCtrl = require('../controllers/blog');

router.post('/main', blogCtrl.getAllPosts);

module.exports = router;