var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var busboy = require('connect-busboy');
var encryptor = require('file-encryptor');
var fs = require('fs');
var crypto = require('crypto');

var uuid = require('node-uuid'); //for generating number

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
  password : 'ThisIs4Class',
  database : 'contractor_info'
});

con.connect();

console.log('Connected to database.');

router.get('/userlist', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM subcontractor_agreement';
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
	var selectQuery = 'SELECT * FROM subcontractor_agreement';
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
	var selectQuery = 'SELECT * FROM subcontractor_contact_form';
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
	var selectQuery = 'SELECT * FROM statement_of_work';
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
	var selectQuery = 'SELECT * FROM w9_form';
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
	var selectQuery = 'SELECT * FROM gen_liability_workers';
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
	var selectQuery = 'SELECT * FROM authorization_electronic_payments';
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
	var selectQuery = 'SELECT * FROM subcontractor_agreement';
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
	var selectQuery = 'SELECT * FROM subcontractor_agreement';
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
	//var newID = uuid.v4(); //generate value automatically using the package
	var newID = crypto.randomBytes(6).toString('hex');
	
	var new1 = crypto.randomBytes(8).toString('hex');
	
	var new2 = crypto.randomBytes(8).toString('hex');
	
	var new3 = crypto.randomBytes(8).toString('hex');
	
	var new4 = crypto.randomBytes(8).toString('hex');
	
	var new5 = crypto.randomBytes(8).toString('hex');
	
	var new6 = crypto.randomBytes(8).toString('hex');
	
	var insertquery1 = "INSERT INTO subcontractor_agreement (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new1 + "')"; //create query string to input
	
	var insertquery2 = "INSERT INTO subcontractor_contact_form (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new2 +  "')"; //create query string to input
	var insertquery3 = "INSERT INTO statement_of_work (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new3 + "')"; //create query string to input
	var insertquery4 = "INSERT INTO w9_form (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new4 + "')"; //create query string to input
	var insertquery5 = "INSERT INTO gen_liability_workers (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new5 +  "')"; //create query string to input
	var insertquery6 = "INSERT INTO authorization_electronic_payments (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new6 +  "')"; //create query string to input
	
	
	con.query(insertquery1, function(err, rows) { //subcontractor agreement
	  if (!err) {
		console.log('NO ISSUE ', rows);
		//console.log('The solution is: ', rows);
		res.render('NewContract', {
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
		console.log('first insert failed.');
		console.log(err);
	  }
	  
	});
	
	con.query(insertquery2, function(err, rows) { //subcontractor contact info
	  if (!err) {
		 console.log('NO ISSUE 2', rows);
		//console.log('The solution is: ', rows);
		res.render('NewContract', {
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
		console.log('second insert failed.');
		console.log(err);
	  }
	  
	});
	
	
	con.query(insertquery3, function(err, rows) { //SOW
	  if (!err) {
		console.log('NO ISSUE 3', rows);
//console.log('The solution is: ', rows);
		res.render('NewContract', {
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
	
	
	con.query(insertquery4, function(err, rows) { //w9
	  if (!err) {
		console.log('NO ISSUE 4', rows);
		//console.log('The solution is: ', rows);
		res.render('NewContract', {
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
	
	
	con.query(insertquery5, function(err, rows) { //gen reliability
	  if (!err) {
		console.log('NO ISSUE 5', rows);
		console.log('The solution is: ', rows);
		res.render('NewContract', {
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
	
	
	con.query(insertquery6, function(err, rows) { //electronic payment authorization
	  if (!err) {
		  
		console.log('NO ISSUE 6', rows);
		console.log('The solution is: ', rows);
		res.render('NewContract', {
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

router.get('/createContract', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'SELECT * FROM employees';
	//var newID = uuid.v4(); //generate value automatically using the package
	var newID = crypto.randomBytes(6).toString('hex');
	
	var new1 = crypto.randomBytes(8).toString('hex');
	
	var new2 = crypto.randomBytes(8).toString('hex');
	
	var new3 = crypto.randomBytes(8).toString('hex');
	
	var new4 = crypto.randomBytes(8).toString('hex');
	
	var new5 = crypto.randomBytes(8).toString('hex');
	
	var new6 = crypto.randomBytes(8).toString('hex');
	
	var insertquery1 = "INSERT INTO subcontractor_agreement (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new1 + "')"; //create query string to input
	
	var insertquery2 = "INSERT INTO subcontractor_contact_form (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new2 +  "')"; //create query string to input
	var insertquery3 = "INSERT INTO statement_of_work (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new3 + "')"; //create query string to input
	var insertquery4 = "INSERT INTO w9_form (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new4 + "')"; //create query string to input
	var insertquery5 = "INSERT INTO gen_liability_workers (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new5 +  "')"; //create query string to input
	var insertquery6 = "INSERT INTO authorization_electronic_payments (`contract_ID`, `form_instance_ID`) VALUES ('" + newID + "','" + new6 +  "')"; //create query string to input
	
	
	con.query(insertquery1, function(err, rows) { //subcontractor agreement
		console.log('Inserting ' + contract_ID + ' into the contract_ID field of subcontractform');
	});
	
	con.query(insertquery2, function(err, rows) { //subcontractor contact info
		 console.log('Inserting ' + contract_ID + ' into the contract_ID field of subcontract contact');
	});
	
	
	con.query(insertquery3, function(err, rows) { //SOW
		console.log('Inserting ' + contract_ID + ' into the contract_ID field of sow');
	});
	
	
	con.query(insertquery4, function(err, rows) { //w9
		console.log('Inserting ' + contract_ID + ' into the contract_ID field of w9'); 
	});
	
	
	con.query(insertquery5, function(err, rows) { //gen reliability
		console.log('Inserting ' + contract_ID + ' into the contract_ID field of general reliability'); 
	});
	
	
	con.query(insertquery6, function(err, rows) { //electronic payment authorization 
		console.log('Inserting ' + contract_ID + ' into the contract_ID field of payment authorization');
		res.redirect('back');    
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

router.get('/uploadFileFunc', function(req, res) {
	fs.readFile(req.files.datafile.path, function (err, data) { 
		var newPath = __dirname + "/uploads/" + datafile.name;
		fs.writeFile(newPath, data, function (err) {
			var key = 'EncryptSecretKey1423';
			var input = path.resolve(__dirname+'/../uploads/' + datafile.name);
			var output = path.resolve(__dirname+'/../private/tmp/file.dat');
			var options = { algorithm : 'aes256' };
			encryptor.encryptFile(input, output, key, options, function(err) {
				//res.download(output);   
			});
			res.redirect("back");
		}); 
		var source = fs.createReadStream(__dirname + '/../private/tmp/file.dat');
		var dest = fs.createWriteStream(__dirname + '/../private/+ datafile.name');
		/* Put file in private folder*/
		source.pipe(dest);
		source.on('end', function() { /* copied */ });
		source.on('error', function(err) { console.log('Move encrypted file error'); /* error */ });
		/* Delete file off of server */
		var filePath = __dirname+'/../uploads/' + datafile.name; 
		fs.unlinkSync(filePath);
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
