const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/contacts')
.then(() => console.log("DB Connected"))
.catch(error => console.error('Error conecting DB', error));