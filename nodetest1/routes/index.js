var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var busboy = require('connect-busboy');
var encryptor = require('file-encryptor');
var fs = require('fs');

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

router.get('/ExpensePolicy', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('ExpensePolicy', {
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

router.get('/Company', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'select subcontractor_contact_form.contract_ID, subcontractor_contact_form.contact_name, subcontractor_agreement.sagreement_form_path, subcontractor_contact_form.scontact_form_path, statement_of_work.sow_form_path, w9_form.w9_form_path, gen_liability_workers.liability_form_path, authorization_electronic_payments.payment_form_path from subcontractor_contact_form inner join subcontractor_agreement on subcontractor_agreement.contract_ID=subcontractor_contact_form.contract_ID inner join statement_of_work ON subcontractor_agreement.contract_ID=statement_of_work.contract_ID inner join w9_form ON subcontractor_agreement.contract_ID=w9_form.contract_ID inner join gen_liability_workers ON subcontractor_agreement.contract_ID=gen_liability_workers.contract_ID inner join authorization_electronic_payments on subcontractor_agreement.contract_ID=gen_liability_workers.contract_ID;';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('Company', {
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

router.get('/FormPage', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('Forms', {
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

router.get('/NewContract', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		console.log('The solution is: ', rows);
		res.render('NewContract', {
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