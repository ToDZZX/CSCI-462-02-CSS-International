

create table subcontractor_agreement(day varchar(2), month varchar(10), company_name varchar(150), company_street_address varchar(100), company_city varchar(50), company_state varchar(2), company_zipcode varchar(10), partner varchar(30), subcontractor_name varchar (30), date varchar(20), subcontractor_agreement mediumblob);

create table subcontractor_contact_form(SSN varchar(9), fed_tax_id varchar(20), company_name varchar(150), company_contact varchar(50), company_street_address varchar(100), company_city varchar(50), company_state varchar(2), company_zipcode varchar(10), contact_name varchar(30), cell_phone varchar (30),  alt_phone varchar(20), company_email varchar(30), subcontractor_contact_info mediumblob);

create table statement_of_work(company_name varchar(150), date varchar(20), statement_of_work mediumblob);

create table w9_form(company_name varchar(150), date varchar(20), w9_form mediumblob);

create table gen_liability_workers(company_name varchar(150), date varchar(20), gen_liability_workers mediumblob);

create table authorization_electronic_payments(financial_name varchar(150), financial_city varchar(30), financial_state varchar(2), financial_zip varchar(10), bank_route_num varchar(9), account_num varchar(17), company_name varchar(150), company_street_address varchar(100), company_city varchar(50), company_state varchar(2), company_zipcode varchar(10) , name varchar(30), email varchar(30), date varchar(20), gen_liability_workers mediumblob);