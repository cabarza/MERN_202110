const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/cars')
    .then(() => console.log("Conexión a la BD exitosa"))
    .catch(error => console.error("Error al conectarse a la BD", error));