const Contact = require('../models/contact.model');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt.config');

module.exports.create = (req, res) => {
    const payload = jwt.decode(req.cookies.usertoken, secret);
    if(payload) {
        const contact = req.body;
        contact.userId = payload.id;
        Contact.create(contact)
            .then(data => {
                Contact.findById(data._id).populate('user')
                    .then(user =>res.json({ ok: true, message: 'Se agregó el contacto', data: user }))
                    .catch(error => {
                        if(error.name == 'ValidationError')
                            res.status(200).json({ ok: false, message: error.message, error: error });
                        else {
                            res.status(200).json({ok: false, message: 'Error al guardar el contacto'});
                        }
                    });
            })
            .catch(error => {
                if(error.name == 'ValidationError')
                    res.status(200).json({ ok: false, message: error.message, error: error });
                else {
                    res.status(200).json({ok: false, message: 'Error al guardar el contacto'});
                }
            });
    } else {
        res.status(200).json({ok: false, message: 'Error al guardar el contacto'});
    }
}

module.exports.edit = (req, resp) => {
    const contact = req.body;
    Contact.findOneAndUpdate({_id: req.params.id }, contact)
        .then(data => resp.status(200).json({ ok: true, message: 'Se actualizó el contacto', data: contact}))
        .catch(error => {
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{ 
                resp.status(500).json({ok: false, message: 'Error al guardar el contacto'})    
            }
        });
}

module.exports.get = (req, res) => {
    Contact.findById(req.params.id).populate('user')
        .then(data => res.status(200).json({ ok: true, message: 'Contacto', data: data}))
        .catch(error => {
            console.log('GET', error);
            res.status(500).json({ok: false, message: 'Error al obtener el contacto'})
        });
}

module.exports.list = (req, res) => {
    Contact.find().populate('user')
        .then(data => res.status(200).json({ ok: true, message: 'Contactos', data: data}))
        .catch(error => {
            console.log('LIST', error);
            res.status(500).json({ok: false, message: 'Error al obtener los contactos'})
        });
}

module.exports.listUserContacts = (req, res) => {
    const payload = jwt.decode(req.cookies.usertoken, secret);
    if(payload) {
        Contact.find({userId: payload.id}).populate('user')
            .then(data => res.status(200).json({ ok: true, message: 'Contactos', data: data}))
            .catch(error => {
                console.log('LIST', error);
                res.status(200).json({ok: false, message: 'Error al obtener los contactos'})
            });
    } else {
        res.status(200).json({ok: false, message: 'Error al obtener los contactos del usuario'})
    } 
}

module.exports.del = (req, res) => {
    Contact.findByIdAndRemove(req.params.id)
        .then(data => res.status(200).json({ ok: true, message: 'Se eliminó  el contacto', data: data}))
        .catch(error => {
            console.log('DELETE', error);
            res.status(500).json({ok: false, message: 'Error al eliminar el contacto'})
        });
}