const mysql = require("mysql");
require('dotenv').config()

// Configure MySQL connection
let Connection = mysql.createConnection({
    host : process.env.db,
    user : process.env.user,
    password : process.env.password,
    database : process.env.db_name
});


//Establish MySQL connection
Connection.connect((err,result)=>{
    if(err)throw err
    console.log("Database connected!!!")
})

var sql = "create table if not exists meraki_data(id  int(11) NOT NULL auto_increment, name  varchar(233), type varchar(355),logo varchar(233),short_description varchar(233),   primary key (id))";
Connection.query(sql,(err,result)=>{
    if(err) throw err
    console.log("Table has created!!")
})

module.exports=Connection