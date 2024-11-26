const express = require('express');
const db = require('../db/connect');
const router = express.Router();

router.post('/signup', (req, res) => {
    const user = req.body
    db.query(`INSERT INTO users (name, lastname, email, password)
    VALUES ('${user.name}', '${user.lastname}', '${user.email}', PASSWORD('${user.password}'));`, function(err, results) {
        if (err) {
            console.error(err);
            res.status(500).send({ error: 'Erreur lors de la création du user' });
        } else {
            res.status(200).send(results);
        }
    });
});

router.get('/signin', (req, res) => {
    db.query("SELECT * FROM users", function(err, results) {
        if (err) {
            console.error(err);
            res.status(500).send({ error: 'Erreur lors de la récupération des produits' });
        } else {
            res.status(200).send(results);
        }
    });
});

module.exports = router;
