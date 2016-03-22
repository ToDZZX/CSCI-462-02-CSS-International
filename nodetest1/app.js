var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var multer = require('multer');
var fs = require('fs');
var busboy = require('connect-busboy');

var routes = require('./routes/index');
var users = require('./routes/users');

// New Code
/*var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(busboy());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//var upload = multer( {dest: './uploads/'} );
// Make our db accessible to our router
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/*var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "database462"
  database: "sys"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});*/

/*con.query('SELECT * FROM employees',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
  /*for (var i = 0; i < rows.length; i++) {
	console.log(rows[i].name);
  };
});*/

/*var employee = { name: 'Winnie', location: 'Australia' };
con.query('INSERT INTO employees SET ?', employee, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

con.query(
  'UPDATE employees SET location = ? Where ID = ?',
  ["South Africa", 5],
  function (err, result) {
    if (err) throw err;

    console.log('Changed ' + result.changedRows + ' rows');
  }
);

con.query(
  'DELETE FROM employees WHERE id = ?',
  [5],
  function (err, result) {
    if (err) throw err;

    console.log('Deleted ' + result.affectedRows + ' rows');
  }
);*/

/*con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});*/

module.exports = app;
