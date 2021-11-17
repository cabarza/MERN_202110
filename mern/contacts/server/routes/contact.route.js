const ContactController = require('../controllers/contact.controller');

module.exports = app => {
    app.get('/api/contacts', ContactController.list);
    app.get('/api/contacts/:id', ContactController.get);
    app.post('/api/contacts', ContactController.create);
    app.put('/api/contacts/:id', ContactController.edit);
    app.delete('/api/contacts/:id', ContactController.del);
}