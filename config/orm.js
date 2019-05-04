const connection = require('../config/connection');

var orm = {
selectAll: function(table, cb) {
  connection.query('select * from ' + table + ';', function(err, result) {
    if (err) {
      console.log('ERROR: ' + err.stack);
    }
    cb(result);
  });
},

create: function(burger_name, cb) {
  connection.query('insert into burger (burger_name) values (?) ', burger_name, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},

update: function(devoured, cb) {
  connection.query('update burger set devoured = true where ?', devoured, function (err, result) {
    if(err) throw err;
    cb(result);
  });
}
};

module.exports = orm;