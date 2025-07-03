const express = require('express');
const router = express.Router();
const HistorialParqueo = require('../models/HistorialParqueo');

router.get('/', async (req, res) => {
  try {
    const data = await HistorialParqueo.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:CELDA_id/:VEHICULO_id', async (req, res) => {
  try {
    const data = await HistorialParqueo.getById(req.params.CELDA_id, req.params.VEHICULO_id);
    if (data) res.json(data);
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const id = await HistorialParqueo.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:CELDA_id/:VEHICULO_id', async (req, res) => {
  try {
    const affected = await HistorialParqueo.update(req.params.CELDA_id, req.params.VEHICULO_id, req.body);
    if (affected) res.json({ success: true });
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:CELDA_id/:VEHICULO_id', async (req, res) => {
  try {
    const affected = await HistorialParqueo.delete(req.params.CELDA_id, req.params.VEHICULO_id);
    if (affected) res.json({ success: true });
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
