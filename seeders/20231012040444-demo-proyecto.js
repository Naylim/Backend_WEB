'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Proyectos', [
      {
        id: 1,
        nombre: "Proyecto1",
        descripcion: "proyecto bonito",
        imagen: "p1.jpg",
        cantidadDonada: 2000,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: "Proyecto2",
        descripcion: "proyecto feo",
        imagen: "p2.jpg",
        cantidadDonada: 100,
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Proyectos', null, {});

  }
};
