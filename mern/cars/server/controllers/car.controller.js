const Car = require('../models/car.model');


module.exports.crear = (req, res) => {
    Car.create(req.body)
        .then(data => res.json({error: false, message: "Automóvil creado correctamente", data: data}))
        .catch(error => {
            if(error.name == 'ValidationError')
                res.json({ ok: false, message: error.message, error: error });
            else {
                res.json({ok: false, message: 'Error al guardar el automóvil'});
            }
        });
}

module.exports.editar = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json({error: false, message: "Automóvil actualizado correctamente", data: req.body}))
        .catch(error => {
            if(error.name == 'ValidationError')
                res.json({ ok: false, message: error.message, error: error });
            else {
                res.json({ok: false, message: 'Error al guardar el automóvil'});
            }
        });
}

module.exports.listar = (req, res) => {
    Car.find()
        .then(data => res.json({error: false, message: "lista de automóviles", data: data}))
        .catch(error => {
            res.json({ok: false, message: 'Error al obtener el listado de automóviles'});
        });
}

module.exports.obtener = (req, res) => {
    Car.findById(req.params.id)
        .then(data => res.json({error: false, message: "automóvil", data: data}))
        .catch(error => {
            res.json({ok: false, message: 'Error al obtener el automóvil'});
        });
}

module.exports.eliminar = (req, res) => {
    Car.findByIdAndDelete(req.params.id)
        .then(data => res.json({error: false, message: "Automóvil eliminado correctamente", data: data}))
        .catch(error => {
            res.json({ok: false, message: 'Error al eliminar el automóvil'});
        });
}