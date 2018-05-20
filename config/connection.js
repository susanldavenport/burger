const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
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
  console.log("========================");
});

module.exports = connection; 