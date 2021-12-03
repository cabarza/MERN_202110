const {listar} = require('../controllers/car-type.controller');
const {authenticate} = require('../config/jwt.config');


module.exports = (app) => {
    app.get('/api/car-types', authenticate, listar);
}