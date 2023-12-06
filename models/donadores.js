'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donadores extends Model {
    static associate(models) {
      models.Donadores.belongsTo(models.Personas, { foreignKey: 'personaID', as: 'Personas' });
      models.Donadores.belongsTo(models.Proyecto, { foreignKey: 'proyectoID', as: 'Proyecto' });
    }
  }
  Donadores.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    personaID: DataTypes.INTEGER,
    proyectoID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Donadores',
  });
  return Donadores;
};