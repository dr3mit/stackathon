//upgrade model for units
const db = require('../db');
const Sequelize = require('sequelize');

const Upgrade = db.define('upgrade', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: 'Upgrade',
  },
  effect: {
    type: Sequelize.STRING,
    defaultValue: 'Effect',
  },
  cost: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Upgrade;
