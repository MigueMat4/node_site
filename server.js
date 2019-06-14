'use strict';

const express = require('express');

// Constantes
const PORT = 8080;
const HOST = '0.0.0.0';

// Aplicación
const app = express();
app.get('/', (req, res) => {
  res.send('Felicidades completaron la practica no. 2\n');
});

app.listen(PORT, HOST);
console.log(`La aplicación está corriendo en http://${HOST}:${PORT}`);
