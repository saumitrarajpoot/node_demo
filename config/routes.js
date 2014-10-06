module.exports = function (app) {
  /*var index = require('../routes/index');
  var users = require('../routes/users');
  app.use('/', index);
  //app.use('/users', users);  */
  var welcomes = require('../app/controllers/welcomes');
  var registrations = require('../app/controllers/users/registrations');
  var sessions = require('../app/controllers/users/sessions');
  var homes = require('../app/controllers/homes');
  var articles = require('../app/controllers/articles');

  app.get('/', welcomes.index);

  app.get('/users/signin', sessions.signin);
  app.post('/users/signin', sessions.createSession);
  app.get('/users/signup', registrations.signup);
  app.post('/users/signup', registrations.createAccount);

  //homes controller
  app.get('/home', homes.index);
}
