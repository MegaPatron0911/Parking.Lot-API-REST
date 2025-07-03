const pool = require('./db');

class ReporteIncidencia {
  constructor({ VEHICULO_id, INCIDENCIA_id, fecha_hora }) {
    this.VEHICULO_id = VEHICULO_id;
    this.INCIDENCIA_id = INCIDENCIA_id;
    this.fecha_hora = fecha_hora;
  }
  getVehiculoId() { return this.VEHICULO_id; }
  setVehiculoId(VEHICULO_id) { this.VEHICULO_id = VEHICULO_id; }
  getIncidenciaId() { return this.INCIDENCIA_id; }
  setIncidenciaId(INCIDENCIA_id) { this.INCIDENCIA_id = INCIDENCIA_id; }
  getFechaHora() { return this.fecha_hora; }
  setFechaHora(fecha_hora) { this.fecha_hora = fecha_hora; }

  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM reporte_incidencia');
    return rows;
  }
  static async getById(VEHICULO_id, INCIDENCIA_id) {
    const [rows] = await pool.promise().query('SELECT * FROM reporte_incidencia WHERE VEHICULO_id = ? AND INCIDENCIA_id = ?', [VEHICULO_id, INCIDENCIA_id]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO reporte_incidencia SET ?', [data]);
    return result.insertId;
  }
  static async update(VEHICULO_id, INCIDENCIA_id, data) {
    const [result] = await pool.promise().query('UPDATE reporte_incidencia SET ? WHERE VEHICULO_id = ? AND INCIDENCIA_id = ?', [data, VEHICULO_id, INCIDENCIA_id]);
    return result.affectedRows;
  }
  static async delete(VEHICULO_id, INCIDENCIA_id) {
    const [result] = await pool.promise().query('DELETE FROM reporte_incidencia WHERE VEHICULO_id = ? AND INCIDENCIA_id = ?', [VEHICULO_id, INCIDENCIA_id]);
    return result.affectedRows;
  }
}

module.exports = ReporteIncidencia;
