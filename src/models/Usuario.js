const pool = require('./db');

class Usuario {
  constructor({ id_usuario, tipo_documento, numero_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion_correo, numero_celular, foto_perfil, estado, clave, PERFIL_USUARIO_id }) {
    this.id_usuario = id_usuario;
    this.tipo_documento = tipo_documento;
    this.numero_documento = numero_documento;
    this.primer_nombre = primer_nombre;
    this.segundo_nombre = segundo_nombre;
    this.primer_apellido = primer_apellido;
    this.segundo_apellido = segundo_apellido;
    this.direccion_correo = direccion_correo;
    this.numero_celular = numero_celular;
    this.foto_perfil = foto_perfil;
    this.estado = estado;
    this.clave = clave;
    this.PERFIL_USUARIO_id = PERFIL_USUARIO_id;
  }
  getIdUsuario() { return this.id_usuario; }
  setIdUsuario(id_usuario) { this.id_usuario = id_usuario; }
  getTipoDocumento() { return this.tipo_documento; }
  setTipoDocumento(tipo_documento) { this.tipo_documento = tipo_documento; }
  getNumeroDocumento() { return this.numero_documento; }
  setNumeroDocumento(numero_documento) { this.numero_documento = numero_documento; }
  getPrimerNombre() { return this.primer_nombre; }
  setPrimerNombre(primer_nombre) { this.primer_nombre = primer_nombre; }
  getSegundoNombre() { return this.segundo_nombre; }
  setSegundoNombre(segundo_nombre) { this.segundo_nombre = segundo_nombre; }
  getPrimerApellido() { return this.primer_apellido; }
  setPrimerApellido(primer_apellido) { this.primer_apellido = primer_apellido; }
  getSegundoApellido() { return this.segundo_apellido; }
  setSegundoApellido(segundo_apellido) { this.segundo_apellido = segundo_apellido; }
  getDireccionCorreo() { return this.direccion_correo; }
  setDireccionCorreo(direccion_correo) { this.direccion_correo = direccion_correo; }
  getNumeroCelular() { return this.numero_celular; }
  setNumeroCelular(numero_celular) { this.numero_celular = numero_celular; }
  getFotoPerfil() { return this.foto_perfil; }
  setFotoPerfil(foto_perfil) { this.foto_perfil = foto_perfil; }
  getEstado() { return this.estado; }
  setEstado(estado) { this.estado = estado; }
  getClave() { return this.clave; }
  setClave(clave) { this.clave = clave; }
  getPerfilUsuarioId() { return this.PERFIL_USUARIO_id; }
  setPerfilUsuarioId(PERFIL_USUARIO_id) { this.PERFIL_USUARIO_id = PERFIL_USUARIO_id; }

  static async getAll() {
    const [rows] = await pool.promise().query('SELECT * FROM usuario');
    return rows;
  }
  static async getById(id_usuario) {
    const [rows] = await pool.promise().query('SELECT * FROM usuario WHERE id_usuario = ?', [id_usuario]);
    return rows[0];
  }
  static async getByNumeroDocumento(numero_documento) {
    const [rows] = await pool.promise().query('SELECT * FROM usuario WHERE numero_documento = ?', [numero_documento]);
    return rows[0];
  }
  static async getUserByEmail(direccion_correo) {
    const [rows] = await pool.promise().query('SELECT * FROM usuario WHERE direccion_correo = ?', [direccion_correo]);
    return rows[0];
  }
  static async create(data) {
    const [result] = await pool.promise().query('INSERT INTO usuario SET ?', [data]);
    return result.insertId;
  }
  static async update(id_usuario, data) {
    const [result] = await pool.promise().query('UPDATE usuario SET ? WHERE id_usuario = ?', [data, id_usuario]);
    return result.affectedRows;
  }
  static async delete(id_usuario) {
    const [result] = await pool.promise().query('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario]);
    return result.affectedRows;
  }
}

module.exports = Usuario;
