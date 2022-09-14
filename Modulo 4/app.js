const express = require('express');
const app = express();
const path = require('path');

//Abro servidor
app.listen(3000,()=>
    console.log("Server running")
);
app.get('/index', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html')
    res.sendFile(htmlPath)
});
//Pagina 404, envio pagina no encontrada
app.get('/404', (req, res) => {
    res.send("Error página no encontrada")
});

app.get('/', (req, res) => {
    res.send("Bienvenido")
});