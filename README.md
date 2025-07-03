
# ParkingLot API REST

API RESTful para la gestión de parqueaderos, vehículos, usuarios, celdas, incidencias y más.

## Requisitos
- Node.js >= 14
- MySQL/MariaDB con la base de datos `parkinglot` y el script `parkinglot.sql` importado

## Instalación y ejecución
1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor:
   ```sh
   npm start
   ```
3. El servidor corre por defecto en `http://localhost:3000`

## Endpoints y ejemplos de uso

### AccesoSalidas (`/api/acceso-salidas`)
- **GET** `/api/acceso-salidas` — Lista todos
- **GET** `/api/acceso-salidas/:id` — Uno por id
- **POST** `/api/acceso-salidas`
  **Body ejemplo:**
  ```json
  {
    "movimiento": "Entrada",
    "fecha_hora": "2025-07-02 10:00:00",
    "puerta": "Puerta 1",
    "tiempo_estadia": 0,
    "VEHICULO_id": 1
  }
  ```
  **Respuesta exitosa:**
  ```json
  { "id": 1 }
  ```
- **PUT** `/api/acceso-salidas/:id` (igual al POST)
- **DELETE** `/api/acceso-salidas/:id`

---

### Celda (`/api/celdas`)
- **GET** `/api/celdas`
- **GET** `/api/celdas/:id`
- **POST** `/api/celdas`
  ```json
  { "tipo": "Carro", "estado": "Libre" }
  ```
  **Respuesta:** `{ "id": 1 }`
- **PUT** `/api/celdas/:id`
- **DELETE** `/api/celdas/:id`

---

### HistorialParqueo (`/api/historial-parqueo`)
- **GET** `/api/historial-parqueo`
- **GET** `/api/historial-parqueo/:CELDA_id/:VEHICULO_id`
- **POST** `/api/historial-parqueo`
  ```json
  { "CELDA_id": 1, "VEHICULO_id": 1, "fecha_hora": "2025-07-02 10:00:00" }
  ```
  **Respuesta:** `{ "id": 1 }`
- **PUT** `/api/historial-parqueo/:CELDA_id/:VEHICULO_id`
- **DELETE** `/api/historial-parqueo/:CELDA_id/:VEHICULO_id`

---

### Incidencia (`/api/incidencias`)
- **GET** `/api/incidencias`
- **GET** `/api/incidencias/:id`
- **POST** `/api/incidencias`
  ```json
  { "nombre": "Robo de vehiculo" }
  ```
  **Respuesta:** `{ "id": 1 }`
- **PUT** `/api/incidencias/:id`
- **DELETE** `/api/incidencias/:id`

---

### PerfilUsuario (`/api/perfiles-usuario`)
- **GET** `/api/perfiles-usuario`
- **GET** `/api/perfiles-usuario/:id`
- **POST** `/api/perfiles-usuario`
  ```json
  { "perfil": "Operador" }
  ```
  **Respuesta:** `{ "id": 1 }`
- **PUT** `/api/perfiles-usuario/:id`
- **DELETE** `/api/perfiles-usuario/:id`

---

### PicoPlaca (`/api/pico-placa`)
- **GET** `/api/pico-placa`
- **GET** `/api/pico-placa/:id`
- **POST** `/api/pico-placa`
  ```json
  { "tipo_vehiculo": "Carro", "numero": "1", "dia": "Lunes" }
  ```
  **Respuesta:** `{ "id": 1 }`
- **PUT** `/api/pico-placa/:id`
- **DELETE** `/api/pico-placa/:id`

---

### ReporteIncidencia (`/api/reporte-incidencia`)
- **GET** `/api/reporte-incidencia`
- **GET** `/api/reporte-incidencia/:VEHICULO_id/:INCIDENCIA_id`
- **POST** `/api/reporte-incidencia`
  ```json
  { "VEHICULO_id": 1, "INCIDENCIA_id": 10, "fecha_hora": "2025-07-02 10:00:00" }
  ```
  **Respuesta:** `{ "id": 1 }`
- **PUT** `/api/reporte-incidencia/:VEHICULO_id/:INCIDENCIA_id`
- **DELETE** `/api/reporte-incidencia/:VEHICULO_id/:INCIDENCIA_id`

---

### Usuario (`/api/usuarios`)
- **GET** `/api/usuarios`
- **GET** `/api/usuarios/:id_usuario`
- **POST** `/api/usuarios`
  ```json
  {
    "tipo_documento": "CC",
    "numero_documento": "123456789",
    "primer_nombre": "Juan",
    "segundo_nombre": "Carlos",
    "primer_apellido": "Pérez",
    "segundo_apellido": "Gómez",
    "direccion_correo": "juan.perez@gmail.com",
    "numero_celular": "3001234567",
    "foto_perfil": "img/juan.jpg",
    "estado": "activo",
    "clave": "1234",
    "PERFIL_USUARIO_id": 2
  }
  ```
  **Respuesta:** `{ "id": 1 }`
- **PUT** `/api/usuarios/:id_usuario`
- **DELETE** `/api/usuarios/:id_usuario`

---

### Vehiculo (`/api/vehiculos`)
- **GET** `/api/vehiculos`
- **GET** `/api/vehiculos/:id`
- **POST** `/api/vehiculos`
  ```json
  {
    "placa": "ABC123",
    "color": "rojo",
    "modelo": "2020",
    "marca": "Toyota",
    "tipo": "Carro",
    "USUARIO_id_usuario": 1
  }
  ```
  **Respuesta:** `{ "id": 1 }`
- **PUT** `/api/vehiculos/:id`
- **DELETE** `/api/vehiculos/:id`

---

## Estructura de respuesta de error
```json
{
  "error": "Mensaje de error"
}
```

---

## Notas
- Todos los endpoints aceptan y devuelven JSON.
- Para probar, usa Postman o cualquier cliente HTTP.
