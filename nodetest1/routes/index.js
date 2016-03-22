var express = require('express');
var router = express.Router();
var fs = require('fs');
var busboy = require('connect-busboy');

console.log('Server started.');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Hello World page. */
router.get('/index', function(req, res) {
    res.render('index', { title: 'Hello, World!' });
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sys'
});

con.connect();

console.log('Connected to database.');

router.get('/userlist', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('userlist', {
			title: rows[0].name,
			results: rows,
			userlist: JSON.stringify(rows)
        });
	  }
	  else {
		res.render('error', {
		  message: err.message,
		  error: err
		});
		console.log('Error while performing Query.');
		console.log(err);
	  }
	  
	});
});

router.get('/SubcontractorAgreement', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('SubcontractorAgreement', {
			title: rows[0].name,
			results: rows,
			userlist: JSON.stringify(rows)
        });
	  }
	  else {
		res.render('error', {
		  message: err.message,
		  error: err
		});
		console.log('Error while performing Query.');
		console.log(err);
	  }
	  
	});
});

router.get('/SubcontractorContact', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('SubcontractorContact', {
			title: rows[0].name,
			results: rows,
			userlist: JSON.stringify(rows)
        });
	  }
	  else {
		res.render('error', {
		  message: err.message,
		  error: err
		});
		console.log('Error while performing Query.');
		console.log(err);
	  }
	  
	});
});

router.get('/StatementOfWork', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('StatementOfWork', {
			title: rows[0].name,
			results: rows,
			userlist: JSON.stringify(rows)
        });
	  }
	  else {
		res.render('error', {
		  message: err.message,
		  error: err
		});
		console.log('Error while performing Query.');
		console.log(err);
	  }
	  
	});
});

router.get('/W9', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('W9', {
			title: rows[0].name,
			results: rows,
			userlist: JSON.stringify(rows)
        });
	  }
	  else {
		res.render('error', {
		  message: err.message,
		  error: err
		});
		console.log('Error while performing Query.');
		console.log(err);
	  }
	  
	});
});

router.get('/GeneralLiability', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('GeneralLiability', {
			title: rows[0].name,
			results: rows,
			userlist: JSON.stringify(rows)
        });
	  }
	  else {
		res.render('error', {
		  message: err.message,
		  error: err
		});
		console.log('Error while performing Query.');
		console.log(err);
	  }
	  
	});
});

router.get('/PaymentAuthorization', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('PaymentAuthorization', {
			title: rows[0].name,
			results: rows,
			userlist: JSON.stringify(rows)
        });
	  }
	  else {
		res.render('error', {
		  message: err.message,
		  error: err
		});
		console.log('Error while performing Query.');
		console.log(err);
	  }
	  
	});
});

router.get('/TimeAndExpense', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('TimeAndExpense', {
			title: rows[0].name,
			results: rows,
			userlist: JSON.stringify(rows)
        });
	  }
	  else {
		res.render('error', {
		  message: err.message,
		  error: err
		});
		console.log('Error while performing Query.');
		console.log(err);
	  }
	  
	});
});

//router.post('/upload', function(req, res) {
//	console.dir(req.files);
//});

router.post('/upload', function(req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);
        fstream = fs.createWriteStream((__dirname.split("\\routes"))[0] + '/uploads/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            res.redirect('back');
        });
    });
	console.dir(req.riles);
});

router.get('/uploadFileFunc', function(req, res) {
	fs.readFile(req.files.datafile.path, function (err, data) { 
		var newPath = __dirname + "/uploads/" + datafile.name;
		fs.writeFile(newPath, data, function (err) {
			res.redirect("back"); 
		}); 
	});
});

/* GET Userlist page. 
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});*/

/* GET New User page. 
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});*/

/* POST to Add User Service 
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});*/

module.exports = router;
