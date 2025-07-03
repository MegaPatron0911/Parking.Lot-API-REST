const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


// Prueba de conexión a la base de datos
const pool = require('./models/db');
app.get('/test-db', (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error de conexión', error: err.message });
    } else {
      conn.ping((pingErr) => {
        conn.release();
        if (pingErr) {
          res.status(500).json({ success: false, message: 'Error al hacer ping', error: pingErr.message });
        } else {
          res.json({ success: true, message: 'Conexión exitosa a MySQL' });
        }
      });
    }
  });
});

app.get('/', (req, res) => {
  res.send('API REST ParkingLot funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
