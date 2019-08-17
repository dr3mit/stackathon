//upgrade model for units
const db = require('../db');
const Sequelize = require('sequelize');

const Upgrade = db.define('upgrade', {
  name: {
    type: Sequelize.STRING,
    defualtValue: 'Upgrade',
  },
  effect: {
    type: Sequelize.STRING,
    defualtValue: 'Effect',
  },
});

module.exports = Upgrade;
