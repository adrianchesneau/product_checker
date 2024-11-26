const mysql = require('mysql');

const db = mysql.createConnection({   
    host: "localhost",
 port:'8889',   
 user: "root",   
 password: "root", 
 database:'product_checker'
});

db.connect(function(err) { 
    if (err) throw err;   
    console.log("Connecté à la base de données MySQL!"); 
  
  });


module.exports = db;
