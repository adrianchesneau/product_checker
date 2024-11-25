const express = require('express');
const app = express();
const port = 5000;

const mysql = require('mysql');
const db = mysql.createConnection({   host: "localhost", port:'8889',   user: "root",   password: "root", database:'product_checker'});





app.get('/api', (req, res) => {

    db.connect(function(err) { 
          if (err) throw err;   
          console.log(); 
        
        });






});

app.listen(port, () => {
    console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`);
});
