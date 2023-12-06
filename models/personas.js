'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personas extends Model {
    static associate(models) {
      // define association here
    }
  }
  Personas.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    rfc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    sequelize,
    modelName: 'Personas',
  });
  Personas.associate = function(models){
    Personas.belongsToMany(models.Proyecto,{
      through: models.Donadores
    });
  };
  return Personas;
};