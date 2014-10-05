
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var model = require('../../models/user');
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
  ///console.log(req.body)
  //user.createUser(req.body);
  //user.createUser();
  //user.createUser(req.body, function (err) {
    return res.redirect('/');
    /*if (!err) {
      console.log('ffffffffffffffffffffffffffffffffffffffffffffffff');
      req.flash('success', 'Successfully created user!');

    } else {
      console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
      console.log(err);
      res.render('/users/registration/signup', {
      });
    } */
 // });
};


