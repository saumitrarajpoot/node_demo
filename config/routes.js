module.exports = function (app) {
  /*var index = require('../routes/index');
  var users = require('../routes/users');
  app.use('/', index);
  //app.use('/users', users);  */
  var sessions = require('../app/controllers/users/sessions');
  var registrations = require('../app/controllers/users/registrations');
  var homes = require('../app/controllers/homes');
  var articles = require('../app/controllers/articles');

  app.get('/', homes.index);
  app.get('/users/signin', sessions.signin);
  app.get('/users/signup', registrations.signup);
  app.post('/users/signup', registrations.createAccount);
}
