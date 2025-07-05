
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usuario.getUserByEmail(email);
    if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

    // El campo correcto es 'clave' en la base de datos
    const validPassword = await bcrypt.compare(password, user.clave);
    if (!validPassword) return res.status(401).json({ message: 'Contraseña incorrecta' });

    // Puedes ajustar los campos del payload según tu modelo
    const token = jwt.sign(
      { id: user.id_usuario, perfil: user.PERFIL_USUARIO_id },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};