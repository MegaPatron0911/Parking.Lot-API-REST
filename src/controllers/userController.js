// Controlador para usuario protegido con JWT
exports.getUserByEmail = (req, res) => {
  // req.user contiene la información del usuario autenticado por JWT
  res.json({ message: 'Usuario autenticado', user: req.user });
};
