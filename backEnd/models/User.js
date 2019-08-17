const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const User = db.define('User', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
    defaultValue: data.constants.GUEST,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    defaultValue: 'pass',
  },
  sid: {
    type: Sequelize.STRING,
    defaultValue: '0',
  },
});

module.exports = User;
