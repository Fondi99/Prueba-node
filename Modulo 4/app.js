const express = require('express');
const app = express()

//Abro servidor
app.listen(3000,()=>
    console.log("Server running")
);

//Pagina 404, envio pagina no encontrada
app.get('/404', (req, res) => {
    res.send("Error página no encontrada")
});

app.get('/', (req, res) => {
    res.send("Bienvenido")
});