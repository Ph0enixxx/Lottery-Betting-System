'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('html/index.jade');
});

app.get('/components/:component/:name', function(req, res) {
  console.log(req.params.name, '<<<<<<<<<');
  var component = req.params.component;
  var name = req.params.name;
  res.render('components/' + component + '/' + name);
});

app.listen(3333, function(){
  console.log('localhost: 3333');
});
