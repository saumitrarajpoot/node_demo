
/**
 * Module dependencies.
 */
var mongoose = require('mongojs')
//var User = mongoose.model('../app/models/user')

/**
 * List
 */

exports.createSession = function (req, res){
  res.render('users/signin', {
    title: 'Sing in'
  });
};

exports.signin = function (req, res){
  res.render('users/sessions/signin', {
    title: 'Sing in'
  });
};
