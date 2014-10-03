
/**
 * Module dependencies.
 */
var mongoose = require('mongojs')
//var User = mongoose.model('../app/models/user')

/**
 * List
 */

exports.index = function (req, res){
  res.render('homes/index', {
    title: 'User'
  });
};


