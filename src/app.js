require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const corsConfig = require('./middleware/corsConfig');
app.use(corsConfig);

app.use(express.json());

// Rutas de la API
app.use('/api/acceso-salidas', require('./routes/accesoSalidasRoutes'));
app.use('/api/celdas', require('./routes/celdaRoutes'));
app.use('/api/historial-parqueo', require('./routes/historialParqueoRoutes'));
app.use('/api/incidencias', require('./routes/incidenciaRoutes'));
app.use('/api/perfiles-usuario', require('./routes/perfilUsuarioRoutes'));
app.use('/api/pico-placa', require('./routes/picoPlacaRoutes'));
app.use('/api/reporte-incidencia', require('./routes/reporteIncidenciaRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/vehiculos', require('./routes/vehiculoRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));

app.get('/', (req, res) => {
  res.send('API REST ParkingLot funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
