const { create, edit,del, get, list } = require('../controllers/contacts.controller');

module.exports = app => {
    app.get('/api/contacts', list);
    app.get('/api/contacts/:id', get);
    app.post('/api/contacts', create);
    app.put('/api/contacts/:id', edit);
    app.delete('/api/contacts/:id', del);
}