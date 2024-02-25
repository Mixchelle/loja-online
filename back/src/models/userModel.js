'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deliveryAddresses: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Defina como uma matriz de strings
    defaultValue: [] // Valor padrão como uma matriz vazia
  }
});

module.exports = User;

