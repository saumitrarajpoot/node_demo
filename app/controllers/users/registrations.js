
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var model = require('../../models/user');
var expressValidator = require('express-validator');
var User = model.User;
/**
 * List
 */

exports.signup = function (req, res){
  res.render('users/registrations/signup', {

  });
};

exports.createAccount = function(req, res){
  var user = new User();
  req.assert('username', 'Userame is required').notEmpty();
  req.assert('email', 'Email is required').notEmpty();
  req.assert('email', 'A valid email is required').isEmail();
  req.assert('password', 'Password is required').notEmpty();
  req.assert('password', '8 to 20 characters required').len(8, 20);
  var errors = req.validationErrors();
  if(req.body.password != req.body.password_confirmation){
    errors.push({ param: 'password_confirmation',
    msg: 'Password and password confirmation does not match',
    value: '' });
  }
  if(!errors){
    console.log(req.body);
    user.createUser(req.body, function (err) {
      if (!err) {
        //req.flash('success', 'Successfully created user!');
        return res.redirect('/');
      } else {
        res.render('/users/registration/signup', {});
      }
    });
  } else {
    return res.redirect('back');
  }
};


