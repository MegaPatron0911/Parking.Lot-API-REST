const pool = require('./db');

class Incidencia {
  constructor({ id, nombre }) {
    this.id = id;
    this.nombre = nombre;
  }
  getId() { return this.id; }
  setId(id) { this.id = id; }
  getNombre() { return this.nombre; }
  setNombre(nombre) { this.nombre = nombre; }

  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM incidencia');
    return rows;
  }
  static async getById(id) {
    const [rows] = await pool.promise().query('SELECT * FROM incidencia WHERE id = ?', [id]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO incidencia SET ?', [data]);
    return result.insertId;
  }
  static async update(id, data) {
    const [result] = await pool.promise().query('UPDATE incidencia SET ? WHERE id = ?', [data, id]);
    return result.affectedRows;
  }
  static async delete(id) {
    const [result] = await pool.promise().query('DELETE FROM incidencia WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Incidencia;
