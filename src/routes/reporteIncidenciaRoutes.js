const express = require('express');
const router = express.Router();
const ReporteIncidencia = require('../models/ReporteIncidencia');

router.get('/', async (req, res) => {
  try {
    const data = await ReporteIncidencia.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:VEHICULO_id/:INCIDENCIA_id', async (req, res) => {
  try {
    const data = await ReporteIncidencia.getById(req.params.VEHICULO_id, req.params.INCIDENCIA_id);
    if (data) res.json(data);
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const id = await ReporteIncidencia.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:VEHICULO_id/:INCIDENCIA_id', async (req, res) => {
  try {
    const affected = await ReporteIncidencia.update(req.params.VEHICULO_id, req.params.INCIDENCIA_id, req.body);
    if (affected) res.json({ success: true });
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:VEHICULO_id/:INCIDENCIA_id', async (req, res) => {
  try {
    const affected = await ReporteIncidencia.delete(req.params.VEHICULO_id, req.params.INCIDENCIA_id);
    if (affected) res.json({ success: true });
    else res.status(404).json({ error: 'No encontrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
