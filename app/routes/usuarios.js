'use-strict';

const router = require('express').Router();
const Usuario = require('../models/usuario');

router.route('/').get(async(req, res) => {

    const usuarios = await Usuario.findAll();

    if(!usuarios){
        res.status(404).json({
            msg: `El login para el id ${id}, no existe.`
        })
    }
    
    res.json(usuarios);
});

module.exports = router;