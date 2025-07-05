const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {  } = require('../controllers/userController'); // Ajusta según tu controlador

router.get('/profile', authMiddleware);

module.exports = router;