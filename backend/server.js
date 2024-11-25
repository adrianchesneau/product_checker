const express = require('express');
const app = express();
const port = 5000;

const mysql = require('mysql');
const db = mysql.createConnection({   host: "localhost",   user: "root",   password: "root" , database: "product_checker"   });





app.get('/api', (req, res) => {


    db.connect(function(err) {   
        if (err) {
            res.send(err);
            return
        }
        console.log("Connecté à la base de données MySQL!"); 
        res.send('Hello depuis le backend !');
      });






});

app.listen(port, () => {
    console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`);
});
