const orm = require('../config/orm');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burger', function(res) {
      cb(res);
    });
  },

  update: function(devoured, cb) {
    orm.update(devoured, function(res) {
      cb(res);
    });
  },

  create: function(burger_name, cb) {
    orm.create(burger_name,  function(res) {
      cb(res);
    });
  }
  
  
};


module.exports = burger ;