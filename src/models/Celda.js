const pool = require('./db');

class Celda {
  constructor({ id, tipo, estado }) {
    this.id = id;
    this.tipo = tipo;
    this.estado = estado;
  }
  getId() { return this.id; }
  setId(id) { this.id = id; }
  getTipo() { return this.tipo; }
  setTipo(tipo) { this.tipo = tipo; }
  getEstado() { return this.estado; }
  setEstado(estado) { this.estado = estado; }

  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM celda');
    return rows;
  }
  static async getById(id) {
    const [rows] = await pool.promise().query('SELECT * FROM celda WHERE id = ?', [id]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO celda SET ?', [data]);
    return result.insertId;
  }
  static async update(id, data) {
    const [result] = await pool.promise().query('UPDATE celda SET ? WHERE id = ?', [data, id]);
    return result.affectedRows;
  }
  static async delete(id) {
    const [result] = await pool.promise().query('DELETE FROM celda WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Celda;
