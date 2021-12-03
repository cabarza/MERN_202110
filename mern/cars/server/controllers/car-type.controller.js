const CarType = require('../models/car-type.model');

module.exports.listar = (req, res) => {
    CarType.find().then(resp => {
        res.json({ error: false, message: "listado de tipos de vehículos", data: resp})
    }).catch(error => res.json({error: true, message: "Error al lista los tipos de vehículos"}));
}