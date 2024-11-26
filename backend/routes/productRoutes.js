const express = require('express');
const db = require('../db/connect');
const router = express.Router();

// Route : Récupérer tous les produits
router.get('/', (req, res) => {
    db.query("SELECT * FROM products", function(err, results) {
        if (err) {
            console.error(err);
            res.status(500).send({ error: 'Erreur lors de la récupération des produits' });
        } else {
            res.status(200).send(results);
        }
    });
});

module.exports = router;
