'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    static associate(models) {
      // define association here
    }
  }
  Proyecto.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }, 
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    imagen: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    cantidadDonada: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Proyecto',
  });
  Proyecto.associate = function(models){
    Proyecto.belongsToMany(models.Personas, {
      through: models.Donadores
    });
  };
  return Proyecto;
};