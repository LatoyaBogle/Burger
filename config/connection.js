var Sequelize = require("sequelize");
var sequelize = new Sequelize("daburger", "root", "", {
    host: "localhost",
    //port: 3306,
    dialect: "mysql"
    
  });
  

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    //port:3000,
    user: 'root',
    password:"",
    database:'burgers_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadid);

});

module.exports = connection;
module.exports = sequelize;