const express = require('express');
const router = express.Router();

// Import the controller functions
const {
    createProyecto,
    getProyectos,
    getProyecto,
    updateProyecto,
    deleteProyecto
} = require('../controladores/proyectoCtrl');

router.post('/', createProyecto);
router.get('/', getProyectos);
router.get('/:id', getProyecto);
router.put('/:id', updateProyecto);
router.delete('/:id', deleteProyecto);

module.exports = router;