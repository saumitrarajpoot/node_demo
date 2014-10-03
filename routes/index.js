var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express1' });
});
router.get('/signup', function(req, res) {
  res.render('signup');
});
router.get('/signin', function(req, res) {
  res.render('sign in page');
});

module.exports = router;
