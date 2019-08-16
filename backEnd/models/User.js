const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const User = db.define('User', {
  id: {
    type: Sequelize.UUID,
    defualtValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
});

module.exports = User;
