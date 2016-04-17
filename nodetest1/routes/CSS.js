var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var busboy = require('connect-busboy');
var encryptor = require('file-encryptor');
var fs = require('fs');
var crypto = require('crypto');

/* GET home page. */
router.get('/companyIndex', function(req, res, next) {
  res.render('companyIndex', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('companyIndex', { title: 'Express' });
});

var mysql = require('mysql');

var person = 'Zack';
//var person = Sabrina;
if (person === 'Zack') {
  var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'sys'
  });
}
else if (person === 'Sabrina') {
  var con = mysql.createConnection({
	host     : 'localhost',
    user     : 'root',
    password : 'ThisIs4Class',
    database : 'contractor_info'
  });
}

con.connect();

console.log('Connected to database [Company-Facing].');

router.get('/Company', function(req, res) {
	
	//var collection = con.get('usercollection');
	var selectQuery = 'select subcontractor_contact_form.contract_ID, subcontractor_contact_form.contact_name, subcontractor_agreement.sagreement_form_path, subcontractor_contact_form.scontact_form_path, statement_of_work.sow_form_path, w9_form.w9_form_path, gen_liability_workers.liability_form_path, authorization_electronic_payments.payment_form_path from subcontractor_contact_form inner join subcontractor_agreement on subcontractor_agreement.contract_ID=subcontractor_contact_form.contract_ID inner join statement_of_work ON subcontractor_agreement.contract_ID=statement_of_work.contract_ID inner join w9_form ON subcontractor_agreement.contract_ID=w9_form.contract_ID inner join gen_liability_workers ON subcontractor_agreement.contract_ID=gen_liability_workers.contract_ID inner join authorization_electronic_payments on subcontractor_agreement.contract_ID=gen_liability_workers.contract_ID;';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('Company', {
			//title: rows[0].name,
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
	var selectQuery = 'SELECT * FROM w9_form';
	con.query(selectQuery, function(err, rows) {
	  if (!err) {
		//console.log('The solution is: ', rows);
		res.render('NewContract', {
			//title: rows[0].name,
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
	console.log('Inserting ' + newID + ' into the contract_ID field of subcontractor_agreement table');
	console.log('Inserting ' + new1 + ' into the form_instance_ID field of subcontract_agreement table');
	});
	
	con.query(insertquery2, function(err, rows) { //subcontractor contact info
		console.log('Inserting ' + newID + ' into the contract_ID field of subcontractor_contact_form table');
		console.log('Inserting ' + new2 + ' into the form_instance_ID field of subcontractor_contact_form table');
	});
	
	
	con.query(insertquery3, function(err, rows) { //SOW
		console.log('Inserting ' + newID + ' into the contract_ID field of statement_of_work table');
		console.log('Inserting ' + new2 + ' into the form_instance_ID field of statement_of_work table');
	});
	
	
	con.query(insertquery4, function(err, rows) { //w9
		console.log('Inserting ' + newID + ' into the contract_ID field of w9_form table');
		console.log('Inserting ' + new2 + ' into the form_instance_ID field of w9_form table');		
	});
	
	
	con.query(insertquery5, function(err, rows) { //gen reliability
		console.log('Inserting ' + newID + ' into the contract_ID field of gen_liability_workers table');
		console.log('Inserting ' + new2 + ' into the form_instance_ID field of gen_liability_workers table');	 
	});
	
	
	con.query(insertquery6, function(err, rows) { //electronic payment authorization 
		console.log('Inserting ' + newID + ' into the contract_ID field of authorization_electronic_payments table');
		console.log('Inserting ' + new2 + ' into the form_instance_ID field of authorization_electronic_payments table');
		res.redirect('back');    
	}); 
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