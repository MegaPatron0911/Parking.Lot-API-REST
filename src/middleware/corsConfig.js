// Configuración personalizada de CORS
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:5500',
  // Agrega aquí otros orígenes permitidos
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Total-Count'],
  credentials: true,
};

module.exports = cors(corsOptions);
