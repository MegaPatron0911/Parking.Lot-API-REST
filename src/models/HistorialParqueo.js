const pool = require('./db');

class HistorialParqueo {
  constructor({ CELDA_id, VEHICULO_id, fecha_hora }) {
    this.CELDA_id = CELDA_id;
    this.VEHICULO_id = VEHICULO_id;
    this.fecha_hora = fecha_hora;
  }
  getCELDAId() { return this.CELDA_id; }
  setCELDAId(CELDA_id) { this.CELDA_id = CELDA_id; }
  getVEHICULOId() { return this.VEHICULO_id; }
  setVEHICULOId(VEHICULO_id) { this.VEHICULO_id = VEHICULO_id; }
  getFechaHora() { return this.fecha_hora; }
  setFechaHora(fecha_hora) { this.fecha_hora = fecha_hora; }

  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM historial_parqueo');
    return rows;
  }
  static async getById(CELDA_id, VEHICULO_id) {
    const [rows] = await pool.promise().query('SELECT * FROM historial_parqueo WHERE CELDA_id = ? AND VEHICULO_id = ?', [CELDA_id, VEHICULO_id]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO historial_parqueo SET ?', [data]);
    return result.insertId;
  }
  static async update(CELDA_id, VEHICULO_id, data) {
    const [result] = await pool.promise().query('UPDATE historial_parqueo SET ? WHERE CELDA_id = ? AND VEHICULO_id = ?', [data, CELDA_id, VEHICULO_id]);
    return result.affectedRows;
  }
  static async delete(CELDA_id, VEHICULO_id) {
    const [result] = await pool.promise().query('DELETE FROM historial_parqueo WHERE CELDA_id = ? AND VEHICULO_id = ?', [CELDA_id, VEHICULO_id]);
    return result.affectedRows;
  }
}

module.exports = HistorialParqueo;
