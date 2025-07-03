const express = require('express');
const router = express.Router();
const ParkingLotModel = require('../models/ParkingLotModel');

// Ejemplo de endpoint que usa el modelo
router.get('/', (req, res) => {
  // Aquí se llamaría a métodos del modelo
  res.json({ message: 'Endpoint ParkingLot funcionando' });
});

module.exports = router;
