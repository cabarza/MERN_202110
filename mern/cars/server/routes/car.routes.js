const {crear, editar, listar, obtener, eliminar} = require('../controllers/car.controller');
const {authenticate} = require('../config/jwt.config');


module.exports = (app) => {
    app.get('/api/cars', authenticate, listar);
    app.get('/api/cars/:id', authenticate, obtener);
    app.post('/api/cars', authenticate, crear);
    app.put('/api/cars/:id', authenticate, editar);
    app.delete('/api/cars/:id', authenticate, eliminar);
}