const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hola desde la instancia con PID: ${process.pid}`);
});

app.listen(port, () => {
    console.log(`API escuchando en puerto ${port}`);
});