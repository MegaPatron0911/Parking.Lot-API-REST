const pool = require('./db');

class Vehiculo {
  constructor({ id, placa, color, modelo, marca, tipo, USUARIO_id_usuario }) {
    this.id = id;
    this.placa = placa;
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.tipo = tipo;
    this.USUARIO_id_usuario = USUARIO_id_usuario;
  }
  getId() { return this.id; }
  setId(id) { this.id = id; }
  getPlaca() { return this.placa; }
  setPlaca(placa) { this.placa = placa; }
  getColor() { return this.color; }
  setColor(color) { this.color = color; }
  getModelo() { return this.modelo; }
  setModelo(modelo) { this.modelo = modelo; }
  getMarca() { return this.marca; }
  setMarca(marca) { this.marca = marca; }
  getTipo() { return this.tipo; }
  setTipo(tipo) { this.tipo = tipo; }
  getUsuarioIdUsuario() { return this.USUARIO_id_usuario; }
  setUsuarioIdUsuario(USUARIO_id_usuario) { this.USUARIO_id_usuario = USUARIO_id_usuario; }

  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM vehiculo');
    return rows;
  }
  static async getById(id) {
    const [rows] = await pool.promise().query('SELECT * FROM vehiculo WHERE id = ?', [id]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO vehiculo SET ?', [data]);
    return result.insertId;
  }
  static async update(id, data) {
    const [result] = await pool.promise().query('UPDATE vehiculo SET ? WHERE id = ?', [data, id]);
    return result.affectedRows;
  }
  static async delete(id) {
    const [result] = await pool.promise().query('DELETE FROM vehiculo WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Vehiculo;
