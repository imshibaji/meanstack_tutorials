var express = require('express');
var User = require('../models/user');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEAN Stack' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Page' });
});

router.get('/users', async function(req, res, next) {
  var users = await User.find();
  res.render('users', { title: 'Users Page', users: users });
});

router.get('/api/users', async function(req, res, next) {
  var users = await User.find();
  // res.render('users', { title: 'Users Page', users: users });
  res.json(users);
});

router.get('/api/user', async function(req, res, next){
  var user = new User(req.query);
  await user.save();
  res.json({message:'User created', data: user});
});

module.exports = router;
