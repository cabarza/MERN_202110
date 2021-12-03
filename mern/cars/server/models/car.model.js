const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: [true, "La marca es requerida"]
    },
    color: {
        type: String,
        required: [true, "El color es requerido"]
    },
    anio: {
        type: Number,
        min:[1950, 'El automóvil es demasiado antiguo'],
        max: [new Date().getFullYear()+1, 'El automóvil no puede ser del futuro']
    }

}, {timestamps: true});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;