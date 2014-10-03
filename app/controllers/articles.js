var controller = function() {};

controller.prototype = {
  'index' : function(user) {
    return '<h1>Todos for ' + user + '</h1>';
  }
};

module.exports = new controller();
