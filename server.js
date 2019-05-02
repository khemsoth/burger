const express = require('express');
const port = process.env.port || 8080;
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});