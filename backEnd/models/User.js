const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const User = db.define('User', {
  id: {
    type: Sequelize.UUID,
    defualtValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
    defualtValue: data.constants.GUEST,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    defualtValue: 'pass',
  },
  sid: {
    type: Sequelize.STRING,
    defualtValue: '0',
  },
});

module.exports = User;
