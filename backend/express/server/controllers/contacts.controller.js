const Contact = require('../model/contact.model');


module.exports.create = (req, resp) => {
    const contact = req.body;
    Contact.create(contact)
        .then(data => resp.status(200).json({ ok: true, message: 'Se agregó el contacto', data: data}))
        .catch(error => {
            console.log('CREATE', error);
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{ 
                resp.status(500).json({ok: false, message: 'Error al guardar el contacto'})    
            }
        });
}

module.exports.edit = (req, resp) => {
    const contact = req.body;
    Contact.findOneAndUpdate({_id: req.params.id }, contact)
        .then(data => resp.status(200).json({ ok: true, message: 'Se actualizó el contacto', data: contact}))
        .catch(error => {
            console.log('EDIT', error);
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{ 
                resp.status(500).json({ok: false, message: 'Error al guardar el contacto'})    
            }
        });
}

module.exports.get = (req, resp) => {
    Contact.findById(req.params.id)
        .then(data => resp.status(200).json({ ok: true, message: 'Contacto', data: data}))
        .catch(error => {
            console.log('GET', error);
            resp.status(500).json({ok: false, message: 'Error al obtener el contacto'})
        });
}

module.exports.list = (req, resp) => {
    Contact.find()
        .then(data => resp.status(200).json({ ok: true, message: 'Contactos', data: data}))
        .catch(error => {
            console.log('LIST', error);
            resp.status(500).json({ok: false, message: 'Error al obtener los contactos'})
        });
}

module.exports.del = (req, resp) => {
    Contact.findByIdAndRemove(req.params.id)
        .then(data => resp.status(200).json({ ok: true, message: 'Se eliminó  el contacto', data: data}))
        .catch(error => {
            console.log('DELETE', error);
            resp.status(500).json({ok: false, message: 'Error al eliminar el contacto'})
        });
}