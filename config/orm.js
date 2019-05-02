const connection = require('../config/connection');

var orm = {
selectAll: function(table, cb) {
  connection.query('select * from ' + table + ';', function(err, result) {
    if (err) {
      console.log('ERROR: ' + err.stack);
    }
    cb(result);
  });
},/*
create: function(table, col, val, cb) {
  connection.query('insert into ? (?) values (?);', val, function(err, result) {
    if (err) {
      console.log('ERROR: ' + err.stack);
    }
    cb(result);
  })
},*/

create: function(table, cols, vals, cb) {
  
},


update: function(id, cb) {
  connection.query('update burger set devoured=true where id = ?;', function(err, result) {
    if (err) {
      console.log('ERROR: ' + err.stack);
    }
    cb(result);
  }
  )}

}
module.exports = orm;