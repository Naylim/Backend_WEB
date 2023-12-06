const models = require('../models');


const createPersona = async (req, res) => {
    try {
        const { id, rfc, nombre, imagen } = req.body;
        const newPersona = await models.Personas.create({
            id, rfc, nombre, imagen
        });
        res.json({ message: 'Persona creada exitosamente' });

    } catch (error) {
        //error que  sale en el front
        res.status(500).json({ message: error.message });
    }
};

const getPersonas = async (req, res) => {
  try {
      const personas = await models.Personas.findAll();
      res.json(personas);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const getPersona = async (req, res) => {
    try {
        const persona = await models.Personas.findOne({
            where: { id: req.params.id }
        });
        if (!persona) {
            res.status(404).json({ message: 'No se encontro a la persona' });
        }

        res.json(persona);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePersona = async (req, res) => {
    try {
        const { id, rfc, nombre, imagen } = req.body;
        const persona = await models.Personas.findOne({
            where: { id: req.params.id }
        });
        await persona.update({ id, rfc, nombre, imagen });
        res.json({ message: 'Actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletePersona = async (req, res) => {
  try {
    const persona = await models.Personas.findOne({
            where: { id: req.params.id }
        });
    await models.Personas.destroy({
      where: { id: persona.id },
    });

    res.json({ message: 'Persona eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
    createPersona,
    getPersonas,
    getPersona,
    updatePersona,
    deletePersona,

};