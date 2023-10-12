'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Personas', [
      {
        id: 10,
        rfc: "123Nay",
        nombre: "Naylim Dorame",
        imagen: "nay.png",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 20,
        rfc: "123Chan",
        nombre: "Alex Chang",
        imagen: "chan.png",
        createdAt: new Date(), 
        updatedAt: new Date()
      }, {
        id: 30,
        rfc: "123Alex",
        nombre: "Alejandro Flores",
        imagen: "alex.png",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Personas', null, {});
  }
};
