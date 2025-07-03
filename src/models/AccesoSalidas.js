const pool = require('./db');

class AccesoSalidas {
  constructor({ id, movimiento, fecha_hora, puerta, tiempo_estadia, VEHICULO_id }) {
    this.id = id;
    this.movimiento = movimiento;
    this.fecha_hora = fecha_hora;
    this.puerta = puerta;
    this.tiempo_estadia = tiempo_estadia;
    this.VEHICULO_id = VEHICULO_id;
  }

  // Getters y setters
  getId() { return this.id; }
  setId(id) { this.id = id; }
  getMovimiento() { return this.movimiento; }
  setMovimiento(movimiento) { this.movimiento = movimiento; }
  getFechaHora() { return this.fecha_hora; }
  setFechaHora(fecha_hora) { this.fecha_hora = fecha_hora; }
  getPuerta() { return this.puerta; }
  setPuerta(puerta) { this.puerta = puerta; }
  getTiempoEstadia() { return this.tiempo_estadia; }
  setTiempoEstadia(tiempo_estadia) { this.tiempo_estadia = tiempo_estadia; }
  getVehiculoId() { return this.VEHICULO_id; }
  setVehiculoId(VEHICULO_id) { this.VEHICULO_id = VEHICULO_id; }

  // Métodos CRUD
  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM acceso_salidas');
    return rows;
  }
  static async getById(id) {
    const [rows] = await pool.promise().query('SELECT * FROM acceso_salidas WHERE id = ?', [id]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO acceso_salidas SET ?', [data]);
    return result.insertId;
  }
  static async update(id, data) {
    const [result] = await pool.promise().query('UPDATE acceso_salidas SET ? WHERE id = ?', [data, id]);
    return result.affectedRows;
  }
  static async delete(id) {
    const [result] = await pool.promise().query('DELETE FROM acceso_salidas WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = AccesoSalidas;
