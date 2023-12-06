const models = require('../models');

const createDonador = async (req, res) => {
  try {
    const { personaId, proyectoId } = req.body;
    // Verificar si la persona y la propiedad existen
    const persona = await models.Personas.findByPk(personaId);
    const proyecto = await models.Proyecto.findByPk(proyectoId);

    if (!persona ) {
      return res.status(404).json({ message: 'No se encontró la persona' });
    }
    if (!proyecto) {
        return res.status(404).json({ message: 'No se encontró el proyecto' });
    }

    const donador = await models.Donadores.create({
       PersonaId: personaId, 
       ProyectoId: proyectoId
    });

    res.json(donador);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getDonadores = async (req, res) => {
  try {
    const donadores = await models.Donadores.findAll({
      /*include: [
        {
          model: models.Personas,
          as: 'Personas',
        },
        {
          model: models.Proyecto,
          as: 'Proyecto',
        },
      ]*/
    });

    res.json(donadores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getDonador = async (req, res) => {
  try {
    const donador = await models.Donadores.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: models.Personas,
          as: 'Personas',
        },
        {
          model: models.Proyecto,
          as: 'Proyecto',
        },
      ]
    });

    res.json(donador);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDonador = async (req, res) => {
  try {
    const { personaId, proyectoId } = req.body;

    const donador = await models.Donadores.findOne({
      where: { id: req.params.id }
    });

    donador.set('personaID', personaId);
    donador.set('proyectoID', proyectoId);

    await donador.save();
    res.json({ message: 'Propietario actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDonador = async (req, res) => {
  try {
    const donador = await models.Donadores.findOne({
      where: { id: req.params.id }
    });

    await donador.destroy();

    res.json({ message: 'Propietario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createDonador,
    getDonadores,
    getDonador,
    updateDonador,
    deleteDonador
};
