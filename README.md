# Estructura básica para API REST con Express.js

Este proyecto es una base para una API REST usando Node.js y Express.js.

## Estructura sugerida

- `/src` - Código fuente principal
  - `/models` - Clases de modelo y lógica de negocio
  - `/routes` - Endpoints de la API
  - `app.js` - Configuración principal de Express
- `/ParkingLot` - Script de base de datos (ya existe en la raíz)

## Instrucciones rápidas

1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor:
   ```sh
   npm start
   ```

## Notas
- Los modelos deben mapearse desde el script de base de datos `ParkingLot` (aún no implementado).
- Los endpoints deben exponer funciones de las clases de modelo.
