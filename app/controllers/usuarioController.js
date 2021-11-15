const {Usuario} = require('../database/db');

module.exports = {

    async todos(req, res){

        const usuarios = await Usuario.findAll();

        res.json(usuarios);
    }
}