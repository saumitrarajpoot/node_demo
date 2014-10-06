
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var crypto = require('crypto');
var uuid = require('node-uuid');
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

function password_ecryption (password, salt) {
  var encrypted_password = crypto.createHmac('sha256', salt).update(password).digest('hex');
  return encrypted_password;
};

UserSchema.methods = {
  createUser : function(params, fn){
    this.name = params['name'];
    this.email = params['email'];
    this.username = params['username'] ;
    encrypted_password = password_ecryption(params['password'], this.salt);
    this.password =  encrypted_password;
    this.save(function (err) {
      fn(err, this);
    });
  }
};

exports.User = mongoose.model('User', UserSchema);
