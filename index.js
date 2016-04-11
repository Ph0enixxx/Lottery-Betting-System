'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/xx', function(req, res) {
  res.render('index.jade');
});

app.listen(3333, function(){
  console.log('localhost: 3333');
});



