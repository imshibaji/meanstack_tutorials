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

router.post('/api/user', async function(req, res, next){
  var user = new User(req.query);
  await user.save();
  res.json({message:'User created', data: user});
});

router.get('/user', async function(req, res, next){
  res.render('user-add', {title:'New User Information'});
});

router.post('/users/:id', async function(req, res, next){
  console.log(req.params.id);
  if(req.params.id){
    // var user = await User.findOne({name: req.params.id});
    var deleteUser = await User.deleteOne({_id: req.params.id});
   console.log(deleteUser.deletedCount);
  }
  res.redirect('/users');
});

router.post('/user', async function(req, res, next){
  if(req.body.name != '' && req.body.email != ''){
    var user = new User(req.body);
    await user.save();
    res.redirect('/users');
  }else{
    res.redirect('/user');
  }
});

module.exports = router;
