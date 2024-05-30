const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
}, {
    timestamps: true
});

module.exports = mongoose.model('Persona', PersonaSchema);