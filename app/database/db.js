const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);

// Vinculamos a nuestros modelos a DB
db.Usuario = require('../models/usuario')(db.connection, DataTypes);
db.Persona = require('../models/persona')(db.connection, DataTypes);

module.exports = db;