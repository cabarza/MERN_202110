const data = [];

module.exports.create = (req, resp) => {
    const contact = req.body;
    contact.id = data.length == 0?data.length+1: data[data.length-1].id+1;
    data.push(contact);
    resp.status(200).json({ ok: true, message: 'Se agregó el contacto', data: contact});
}

module.exports.edit = (req, resp) => {
    const id = req.params.id;
    const contact = req.body;
    const index = data.findIndex(c => c.id == id);
    data.splice(index, 1, contact);
    resp.status(200).json({ ok: true, message: 'Se actualizó el contacto', data: contact});
}

module.exports.get = (req, resp) => {
    const id = req.params.id;
    const contact = data.find(c => c.id == id);
    if(contact){
        resp.status(200).json({ ok: true, message: 'Contacto encontrado', data: contact });
    } else {
        resp.status(404).json({ ok: false, message: 'Contacto no encontrado'});
    }
}

module.exports.list = (req, resp) => {
    resp.status(200).json({ ok: true, message: 'Lista de contactos', data: data});
}

module.exports.del = (req, resp) => {
    const id = req.params.id;
    const index = data.findIndex(c => c.id == id);
    const contact = data.splice(index, 1);
    resp.status(200).json({ ok: true, message: 'Se eliminó el contacto', data: contact});
}