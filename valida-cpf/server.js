'use strict';

const express = require('express');
const validarCpf = require('validar-cpf');

// Constants
const PORT = 8080;

//ID
const id = Math.floor(Math.random() * 10000);

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world from ' + req.connection.localAddress + ' ' + req.connection.localPort + '.\n');
});

app.get('/validar/:cpf', (req, res) => {
    var cpf = req.params.cpf;
    res.send(validarCpf(cpf)+'\n');
});

app.get('/id/', (req, res) => {
     res.send('ID: ' + id +'\n');
});  
app.listen(PORT);
console.log(`Running listening on port ${PORT}`);
