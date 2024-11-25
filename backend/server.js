const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    res.send('Hello depuis le backend !');
});

app.listen(port, () => {
    console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`);
});
