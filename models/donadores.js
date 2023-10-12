'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donadores extends Model {
    static associate(models) {
      // define association here
    }
  }
  Donadores.init({
    personaID: DataTypes.INTEGER,
    proyectoID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Donadores',
  });
  return Donadores;
};