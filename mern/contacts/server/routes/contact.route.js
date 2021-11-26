const ContactController = require('../controllers/contact.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/contacts', authenticate, ContactController.list);
    app.get('/api/contacts/user', authenticate, ContactController.listUserContacts);
    app.get('/api/contacts/:id', authenticate, ContactController.get);
    app.post('/api/contacts', authenticate, ContactController.create);
    app.put('/api/contacts/:id', authenticate, ContactController.edit);
    app.delete('/api/contacts/:id', authenticate, ContactController.del);
}