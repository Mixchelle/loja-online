const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

