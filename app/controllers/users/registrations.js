
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
  user.createUser(req, function (err) {
    if (!err) {
      //req.flash('success', 'Successfully created user!');
      return res.redirect('/');
    } else {
      return res.redirect('back');
    }
  });
};


