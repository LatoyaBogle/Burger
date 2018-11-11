//var Sequelize = require("sequelize");
//var sequelize = new Sequelize("burgers_db", "root", "", {
   // host: "localhost",
    //port: 3306,
    //dialect: "mysql"
    
 // });
  
var connection;
var mysql = require('mysql');
if (process.env.JAWSDB_URL){
    connection= mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection =mysql.createConnection({
    host: 'localhost',
    //port:3000,
    user: 'root',
    password:"",
    database:'burgers_db'
});
};


connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadid);

});

module.exports = connection;
//module.exports = sequelize;
