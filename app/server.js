'use-strict'
const express = require('express');
const cors = require('cors');
const router = require('express').Router();
const { connection } = require('./database/db');

const app = express();
const PORT = 3000;

// Config Cabeceras
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// // Rutas
app.use('/api', require('./routes'));

app.use(router);


// Inicio Server
app.listen(PORT, () => {
    console.log(`Servidor ha arrancado en http://localhost:${PORT}`);

    connection.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
})



