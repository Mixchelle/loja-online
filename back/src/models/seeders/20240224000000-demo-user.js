'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Helena Gilbert',
        email: 'helena@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Damon Salvatore',
        email: 'damon@example.com',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stefan Salvatore',
        email: 'stefan@example.com',
        password: 'password789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bonnie Bennett',
        email: 'bonnie@example.com',
        password: 'passwordabc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caroline Forbes',
        email: 'caroline@example.com',
        password: 'passworddef',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
