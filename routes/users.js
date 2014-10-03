var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res) {
  console.log('fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
  res.render('singup');
});

router.get('/signin', function(req, res) {
  res.render('singin');
});

module.exports = router;
