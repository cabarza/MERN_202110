const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"]
    },
    email: {
        type: String,
        required: [true, "El email es requerido"]
    },
    phone: String,
    age: {
        type: Number,
        min:[0, 'No puede ser menor a 0 años'],
        max: [120, 'No puede tener mas de 120 años']
    }
}, { timestamps: true });

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;