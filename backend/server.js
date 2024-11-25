const express = require('express');
const app = express();
const port = 5000;

const mysql = require('mysql');
const db = mysql.createConnection({   host: "localhost", port:'8889',   user: "root",   password: "root", database:'product_checker'});

db.connect(function(err) { 
    if (err) throw err;   
    console.log("Connecté à la base de données MySQL!"); 
  
  });
  
app.get('/api', (req, res) => {
    db.query("SELECT * from products" , function(err, result) {
        console.log(err, result)
        if(err){
            res.send(err)
        }else{
            res.send(result[0].name)
        }
    })
   

});

app.listen(port, () => {
    console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`);
});
