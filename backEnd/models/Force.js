const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const Force = db.define('force', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: `FORCE`,
  },
  curCost: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  maxCost: {
    type: Sequelize.INTEGER,
    defaultValue: -1,
  },
  faction: {
    type: Sequelize.ENUM(
      Object.values(data.factions).map(faction => faction.name)
    ),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Force;
