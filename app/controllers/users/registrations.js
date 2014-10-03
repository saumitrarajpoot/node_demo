
/**
 * Module dependencies.
 */
var mongoose = require('mongojs')
//var User = mongoose.model('../app/models/user')

/**
 * List
 */

exports.signup = function (req, res){
  res.render('users/registrations/signup', {
    title: 'Sign up'
  });
};


