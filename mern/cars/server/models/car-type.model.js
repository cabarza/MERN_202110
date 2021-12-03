const mongoose = require('mongoose');

const CarTypeSchema = new mongoose.Schema({
    nombre: String
});

const CarType = mongoose.model('CarType', CarTypeSchema);

module.exports = CarTypeSchema;

module.exports = CarType;