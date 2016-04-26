'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var users =  require('./routes/users');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(cookieParser());

//app.all('*', users.requireAuthentication);
app.use('/', users);

app.get('/', function(req, res) {
  res.render('html/index.jade');
});

app.get('/components/:component/:name', function(req, res) {
  console.log(req.params.name, '<<<<<<<<<');
  var component = req.params.component;
  var name = req.params.name;
  res.render('components/' + component + '/' + name);
});

/*
app.post('/api/login', function(req, res) {
  console.log(req.body, "<<<<<<<<<<<<<<<<<<<");
  res.send({
    status: 'yes'
  });
});
*/

app.listen(3333, function(){
  console.log('localhost: 3333');
});
