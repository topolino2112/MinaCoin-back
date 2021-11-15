const router = require('express').Router();

// Importa controladores
const UsuarioController = require('./controllers/usuarioController');

// Home
router.get('/', (req, res) => res.json({Inicio: "Home"}));

// Rutas usuarios
// devuelve todos
router.get('/usuarios/', UsuarioController.todos);

module.exports = router;