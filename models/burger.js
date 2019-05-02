const orm = require('../config/orm');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burger', function(res) {
      cb(res);
    });
  },
update: function(id, cb) {
  orm.update(id, function(res) {
    cb(res);
  });
},
  create: function(col, val, cb) {
    orm.create('burger', col, val, function(res) {
      cb(res);
    });
  }
};


module.exports = burger ;