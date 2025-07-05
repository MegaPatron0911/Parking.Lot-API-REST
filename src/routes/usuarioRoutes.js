const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => {
  try {
    const data = await Usuario.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Buscar usuario por id_usuario
router.get('/:id_usuario', async (req, res) => {
  try {
    const data = await Usuario.getById(req.params.id_usuario);
    if (data) res.json(data);
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Buscar usuario por número de documento
router.get('/documento/:numero_documento', async (req, res) => {
  try {
    const data = await Usuario.getByNumeroDocumento(req.params.numero_documento);
    if (data) res.json(data);
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Buscar usuario por correo electrónico (protegido con JWT)
const authMiddleware = require('../middleware/authMiddleware');
const { getUserByEmail } = require('../controllers/userController');
router.get('/correo/:direccion_correo', authMiddleware, getUserByEmail);


router.post('/', async (req, res) => {
  try {
    const id = await Usuario.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id_usuario', async (req, res) => {
  try {
    const affected = await Usuario.update(req.params.id_usuario, req.body);
    if (affected) res.json({ success: true });
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id_usuario', async (req, res) => {
  try {
    const affected = await Usuario.delete(req.params.id_usuario);
    if (affected) res.json({ success: true });
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
