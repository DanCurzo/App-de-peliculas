const express = require('express');
const app = express();

app.start(8000,() => 
    console.log("Servidor corriendo en el puerto 8000")
)