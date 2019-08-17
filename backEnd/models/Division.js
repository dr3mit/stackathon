const db = require('../db');
const Sequelize = require('sequelize');

const Division = db.define('division', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  number: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  curCost: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  commander: {
    type: Sequelize.STRING,
  },
  leadership: {
    type: Sequelize.INTEGER,
    defaultValue: 8,
  },
});

module.exports = Division;
