
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var crypto = require('crypto');
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
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  password: { type: String, default: '' },
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

function hash (msg, key) {
  return crypto.createHmac('sha256', key).update(msg).digest('hex');
};

UserSchema.methods = {
  createUser : function(params){
    this.name = params['name'];
    this.email = params['email'];
    this.username = params['username'] ;
    this.password = params['password'];
    console.log(this);
    this.save();
  }
};

exports.User = mongoose.model('User', UserSchema);
