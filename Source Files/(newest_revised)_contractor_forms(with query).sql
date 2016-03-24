

create table subcontractor_agreement(contract_ID int(10), form_ID int(5), form_instance_ID int primary key, company_name varchar(150), company_street_address varchar(100), company_city varchar(50), company_state varchar(2), company_zipcode varchar(10), partner varchar(30), subcontractor_name varchar (30), date_completed varchar(10), sagreement_form_path varchar(100) NULL);

create table subcontractor_contact_form(contract_ID int(10), form_ID int(5), form_instance_ID int primary key, SSN varchar(9), fed_tax_id varchar(20), company_name varchar(150), company_contact varchar(50), company_street_address varchar(100), company_city varchar(50), company_state varchar(2), company_zipcode varchar(10), contact_name varchar(30), cell_phone varchar (30),  alt_phone varchar(20), company_email varchar(30), scontact_form_path varchar(100) NULL);

create table statement_of_work(contract_ID int(10), form_ID int(5), form_instance_ID int primary key, company_name varchar(150), date_completed varchar(20), sow_form_path varchar(100) NULL);

create table w9_form(contract_ID int(10), form_ID int(5), form_instance_ID int primary key, company_name varchar(150), date_completed varchar(20), w9_form_path varchar(100) NULL);

create table gen_liability_workers(contract_ID int(10), form_ID int(5), form_instance_ID int primary key, date_completed varchar(20), company_name varchar(150), company_street_address varchar(100), company_city varchar(50), company_state varchar(2), company_zipcode varchar(10), liability_form_path varchar(100) NULL);

create table authorization_electronic_payments(contract_ID int(10), form_ID int(5), form_instance_ID int primary key, financial_name varchar(150), financial_city varchar(30), financial_state varchar(2), financial_zip varchar(10), bank_route_num varchar(9), account_num varchar(17), company_name varchar(150), company_street_address varchar(100), company_city varchar(50), company_state varchar(2), company_zipcode varchar(10) , name varchar(30), email varchar(30), date_completed varchar(20), payment_form_path varchar(100) NULL);

Insert into subcontractor_agreement values (777, 5, 225, 'CompanyName', 'street adress', 'city stuff', 'SC', 29456, 'PartnerName', 'SubName', 1993-11-11, NULL);
Insert into subcontractor_contact_form values (777, 2, 124, 456456, 1234567, 'CompanyName', 84399099000, 'street adress', 'companycity', 'SC', 29456, 'nameofcontact', 8431234567,  2345678, 'email', 'C:\Desktop\form1');
insert into statement_of_work values (777, 3, 231, 'CompanyName', 'datecompleted', 'C:\Desktop\form2');
insert into w9_form values (777, 4, 386, 'CompanyName', 'datecompleted', NULL);
insert into gen_liability_workers values (777, 8, 124, 'datecompleted', 'CompanyName', 'street adress', 'city stuff', 'SC', 29456, 'C:\Desktop\form6');
insert into authorization_electronic_payments values (777, 6, 126, 'financial things', 'financial city', 'SC', 29456, 'secure', 'accountnumber', 'CompanyName', 'company street', 'companycity', 'SC', '29456' , 'company name', 'le email', '11-12-1998', 'C:Desktop\form12');


Insert into subcontractor_agreement values (888, 5, 215, 'CompanyName', 'street adress', 'city stuff', 'SC', 29456, 'PartnerName', 'SubName', 1993-11-11, 'C:Documents\form124');
Insert into subcontractor_contact_form values (888, 2, 184, 456456, 1234567, 'CompanyName', 84399099000, 'street adress', 'companycity', 'SC', 29456, 'nameofcontact', 8431234567,  2345678, 'email', NULL);
insert into statement_of_work values (888, 3, 261, 'CompanyName', 'datecompleted', 'C:\Desktop\form2');
insert into w9_form values (888, 4, 384, 'CompanyName', 'datecompleted', 'C:\Documents\form100');
insert into gen_liability_workers values (888, 8, 114, 'datecompleted', 'CompanyName', 'street adress', 'city stuff', 'SC', 29456, 'C:\Desktop\form6');
insert into authorization_electronic_payments values (888, 6, 129, 'financial things', 'financial city', 'SC', 29456, 'secure', 'accountnumber', 'CompanyName', 'company street', 'companycity', 'SC', '29456' , 'company name', 'le email', '11-12-1998', 'C:Desktop\form12');


select subcontractor_agreement.sagreement_form_path, subcontractor_contact_form.scontact_form_path, statement_of_work.sow_form_path, w9_form.w9_form_path, gen_liability_workers.liability_form_path, authorization_electronic_payments.payment_form_path from subcontractor_contact_form inner join subcontractor_agreement on subcontractor_agreement.contract_ID=subcontractor_contact_form.contract_ID inner join statement_of_work ON subcontractor_agreement.contract_ID=statement_of_work.contract_ID inner join w9_form ON subcontractor_agreement.contract_ID=w9_form.contract_ID inner join gen_liability_workers ON subcontractor_agreement.contract_ID=gen_liability_workers.contract_ID inner join authorization_electronic_payments on subcontractor_agreement.contract_ID=gen_liability_workers.contract_ID;