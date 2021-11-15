'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Usuarios', [
      { usuario: 'Topolino21',password: '123',createdAt: new Date(), updatedAt: new Date()},
      { usuario: 'Marquitos32',password: '123',createdAt: new Date(), updatedAt: new Date()},
      { usuario: 'Hector4r',password: '123',createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
