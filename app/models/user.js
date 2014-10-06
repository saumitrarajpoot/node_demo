
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var crypto = require('crypto');
var uuid = require('node-uuid');
var expressValidator = require('express-validator');
var Schema = mongoose.Schema;
var oAuthTypes = [
  'github',
  'twitter',
  'facebook',
  'google',
  'linkedin'
];

/**
 * User Schema
 */

var UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, index: { unique: true }, default: '' },
  username: { type: String, index: { unique: true }, default: '' },
  password: { type: String, default: '' },
  salt: { type: String, required: true, default: uuid.v1 },
  //provider: { type: String, default: '' },
  //salt: { type: String, default: '' },
  /*authToken: { type: String, default: '' },
  facebook: {},
  twitter: {},
  github: {},
  google: {},
  linkedin: {}*/
  createdAt: {
    type: Date,
    'default': Date.now
  }
});

var isValidate = function(req){
  req.assert('username', 'Userame is required').notEmpty();
  req.assert('email', 'Email is required').notEmpty();
  req.assert('email', 'A valid email is required').isEmail();
  req.assert('password', 'Password is required').notEmpty();
  req.assert('password', '8 to 20 characters required').len(8, 20);
  var errors = req.validationErrors();
  if(req.body.password != req.body.password_confirmation){
    if(!errors){ errors = []; }
    errors.push({ param: 'password_confirmation',
    msg: 'Password and password confirmation does not match',
    value: '' });
  }
  return errors;
}

function password_ecryption (password, salt) {
  var encrypted_password = crypto.createHmac('sha256', salt).update(password).digest('hex');
  return encrypted_password;
};

UserSchema.methods = {
  createUser : function(req, fn){
    var errors = isValidate(req);
    var params = req.body
    this.name = params['name'].trim();
    this.email = params['email'].trim();
    this.username = params['username'].trim();

    if(!errors){
      encrypted_password = password_ecryption(params['password'].trim(), this.salt);
      this.password =  encrypted_password;
      if(encrypted_password != null && encrypted_password != '') {
        this.save(function (err) {
          fn(err, this);
        });
      }
    } else{
      fn(errors, this);
    }
  }
};

exports.User = mongoose.model('User', UserSchema);
