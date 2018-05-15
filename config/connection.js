const mysql = require('mysql');

var connectionn = mysql.createConnection({
  host: "localhost",
  port: 8800,
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err){
  if(err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as " + connection.threadId);
});

module.exports = connection; 