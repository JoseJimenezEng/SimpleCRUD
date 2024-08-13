const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String
});

module.exports = mongoose.model('Persona', personaSchema);