const pool = require('./db');

class PicoPlaca {
  constructor({ id, tipo_vehiculo, numero, dia }) {
    this.id = id;
    this.tipo_vehiculo = tipo_vehiculo;
    this.numero = numero;
    this.dia = dia;
  }
  getId() { return this.id; }
  setId(id) { this.id = id; }
  getTipoVehiculo() { return this.tipo_vehiculo; }
  setTipoVehiculo(tipo_vehiculo) { this.tipo_vehiculo = tipo_vehiculo; }
  getNumero() { return this.numero; }
  setNumero(numero) { this.numero = numero; }
  getDia() { return this.dia; }
  setDia(dia) { this.dia = dia; }

  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM pico_placa');
    return rows;
  }
  static async getById(id) {
    const [rows] = await pool.promise().query('SELECT * FROM pico_placa WHERE id = ?', [id]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO pico_placa SET ?', [data]);
    return result.insertId;
  }
  static async update(id, data) {
    const [result] = await pool.promise().query('UPDATE pico_placa SET ? WHERE id = ?', [data, id]);
    return result.affectedRows;
  }
  static async delete(id) {
    const [result] = await pool.promise().query('DELETE FROM pico_placa WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = PicoPlaca;
