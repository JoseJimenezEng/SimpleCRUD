const express = require('express');
const router = express.Router();
const Persona = require('../personas/persona');

router.get('/', async (req, res) => {
  const personas = await Persona.find();
  res.send(personas);
});

router.get('/:id', async (req, res) => {
  const persona = await Persona.findById(req.params.id);
  res.send(persona);
});

router.post('/', async (req, res) => {
  const persona = new Persona({
    name: req.body.name,
    email: req.body.email,
    picture: req.body.picture
  });

  await persona.save().catch((err) => {
        console.log(err);
  });
  res.send(persona);
});

router.put('/:id', async (req, res) => {
  const persona = await Persona.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    picture: req.body.picture
  }, { new: true });
  res.send(persona);
});

router.delete('/:id', async (req, res) => {
  await Persona.findByIdAndDelete(req.params.id);
  res.send('Persona eliminado');
});

module.exports = router;