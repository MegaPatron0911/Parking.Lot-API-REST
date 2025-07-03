const pool = require('./db');

class PerfilUsuario {
  constructor({ id, perfil }) {
    this.id = id;
    this.perfil = perfil;
  }
  getId() { return this.id; }
  setId(id) { this.id = id; }
  getPerfil() { return this.perfil; }
  setPerfil(perfil) { this.perfil = perfil; }

  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM perfil_usuario');
    return rows;
  }
  static async getById(id) {
    const [rows] = await pool.promise().query('SELECT * FROM perfil_usuario WHERE id = ?', [id]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO perfil_usuario SET ?', [data]);
    return result.insertId;
  }
  static async update(id, data) {
    const [result] = await pool.promise().query('UPDATE perfil_usuario SET ? WHERE id = ?', [data, id]);
    return result.affectedRows;
  }
  static async delete(id) {
    const [result] = await pool.promise().query('DELETE FROM perfil_usuario WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = PerfilUsuario;
