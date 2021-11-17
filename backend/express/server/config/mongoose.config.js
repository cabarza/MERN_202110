const mongoose = require('mongoose');

mongoose.pluralize(null);
mongoose.connect('mongodb://localhost/contacts')
.then( () => console.log('Conectado a la BD'))
.catch( err => console.error('Error al conectar con la BD', err));