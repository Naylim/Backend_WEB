const models = require('../models');

const createProyecto = async (req, res) => {
  try {
    const { id, nombre, descripcion, imagen, cantidadDonada } = req.body;

    const proyecto = await models.Proyecto.create({
        id, nombre, descripcion, imagen, cantidadDonada
    });

    res.json(proyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProyectos = async (req, res) => {
  try {
    const proyectos = await models.Proyecto.findAll();
    res.json(proyectos);
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};

const getProyecto = async (req, res) => {
  try {
    const proyecto = await models.Proyecto.findOne({
      where: { id: req.params.id }
    });
    res.json(proyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProyecto = async (req, res) => {
  try {
    const { id, nombre, descripcion, imagen, cantidadDonada } = req.body;

    const proyecto = await models.Proyecto.findOne({
      where: { id: req.params.id }
    });

 
    await proyecto.update({id, nombre, descripcion, imagen, cantidadDonada });
    res.json({ message: 'Proyecto actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProyecto = async (req, res) => {
  try {
    const proyecto = await models.Proyecto.findOne({
      where: { id: req.params.id }
    });
    await models.Proyecto.destroy({
      where: { id: req.params.id }
    });

    res.json({ message: 'Proyecto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProyecto,
  getProyectos,
  getProyecto,
  updateProyecto,
  deleteProyecto
};