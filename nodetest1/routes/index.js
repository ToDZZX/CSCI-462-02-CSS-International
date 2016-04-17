var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var busboy = require('connect-busboy');
var encryptor = require('file-encryptor');
var fs = require('fs');

//app.set('prev', 'here');
//console.log(app.get('prev'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

var mysql = require('mysql');

//var person = 'Zack';
var person = 'Sabrina';
//if (person === 'Zack') {
//  var con = mysql.createConnection({
//	host     : 'localhost',
//	user     : 'root',
//	password : '',
//	database : 'sys'
//  });
//}
//else if (person === 'Sabrina') {
  var con = mysql.createConnection({
	host     : 'localhost',
    user     : 'root',
    password : 'ThisIs4Class',
    database : 'contractor_info'
  });
//}

con.connect();

console.log('Connected to database [Customer-Facing].');

router.get('/userlist', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('userlist', {
		//	title: rows[0].name,
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

router.get('/Jobs', function(req, res) {
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('Jobs', {
		//	title: rows[0].name,
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

router.get('/FormHome', function(req, res) {
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('Forms', {
		//	title: rows[0].name,
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
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('SubcontractorAgreement', {
		//	title: rows[0].name,
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

router.get('/S[ubcontractorContact', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('SubcontractorContact', {
		//	title: rows[0].name,
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
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('StatementOfWork', {
		//	title: rows[0].name,
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
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('W9', {
		//	title: rows[0].name,
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
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('GeneralLiability', {
		//	title: rows[0].name,
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
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('PaymentAuthorization', {
		//	title: rows[0].name,
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

router.get('/ExpensePolicy', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('ExpensePolicy', {
		//	title: rows[0].name,
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

router.post('/upload/:form', function(req, res) {
	//console.log('upload test ' + req.params.form);
	var locat;
	switch (req.params.form) {
		case 'SubcontractorAgreement':
			locat = '/subcontractorAgreement';
			break;
		case 'GeneralLiability':
			locat = '/generalLiability';
			break;
		case 'ExpensePolicy':
			locat = '/expensePolicy';
			break;
		case 'W9':
			locat = '/w9';
			break;
		case 'PaymentAuthorization':
			locat = '/paymentAuthorization';
			break;
		case 'StatementOfWork':
			locat = '/statementOfWork';
			break;
		default:
			locat = '/tmp';
	}
	/*if (req.url === '/SubcontractorAgreement') {
		console.log('upload here: ');
	}
	if (req.url === '/SubcontractorContact') {
		console.log('upload here: ' + req.url);
	}*/
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename + ' to: ' + locat);
        fstream = fs.createWriteStream((__dirname.split("\\routes"))[0] + '/private/tmp/' + filename);
        file.pipe(fstream);
		var key = 'EncryptSecretKey1423';
		var input = path.resolve(__dirname+'/../private/tmp/' + filename);
		var fileOutputName = '/file.dat';
		var fileOutputPath = '/private' + locat + fileOutputName;
		var output = path.resolve(__dirname+'/..' + fileOutputPath);// + filename);
		var options = { algorithm : 'aes256' };
		encryptor.encryptFile(input, output, key, options, function(err) {
			//res.download(output);   
		});
		/* Delete file off of server */
		var filePath = __dirname+'/../private/tmp/' + filename; 
        fstream.on('close', function () {
			fs.unlinkSync(filePath);
            res.redirect('back');
        });
    });
	console.dir(req.riles);
});

router.post('/download', function(req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Downloading: " + filename);
        fstream = fs.createWriteStream((__dirname.split("\\routes"))[0] + '/private/tmp/' + filename);
        file.pipe(fstream);
		var key = 'EncryptSecretKey1423';
		var input = path.resolve(__dirname+'/../private/tmp/' + filename);
		var output = path.resolve(__dirname+'/../private/tmp/file.dat');// + filename);
		var options = { algorithm : 'aes256' };
		encryptor.encryptFile(input, output, key, options, function(err) {
			//res.download(output);   
		});
		/* Delete file off of server */
		//var filePath = __dirname+'/../tmp/private/' + filename; 
		//fs.unlinkSync(filePath);
		var filePath = __dirname+'/../private/tmp/' + filename; 
        fstream.on('close', function () {
			fs.unlinkSync(filePath);
            res.redirect('back');
        });
    });
	console.dir(req.riles);
});

router.get("/encrypt",function(req,res){
   var key = 'EncryptSecretKey1423';
   var input = path.resolve(__dirname+'/../private/test.pdf');
   var output = path.resolve(__dirname+'/../private/tmp/file.dat');
   var options = { algorithm : 'aes256' };
   encryptor.encryptFile(input, output, key, options, function(err) {
        //res.download(output);   
	});
});

router.get("/decrypt",function(req,res){
       
   var key = 'EncryptSecretKey1423';
   var input = path.resolve(__dirname+'/../private/tmp/file.dat');
   var output = path.resolve(__dirname+'/../private/test.pdf');
   var options = { algorithm : 'aes256' };
   encryptor.decryptFile(input, output, key, options, function(err) {
        //res.download(output);  
   });
 });

module.exports = router;