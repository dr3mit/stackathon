const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const Force = db.define('army', {
  id: {
    type: Sequelize.UUID,
    defualtValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    defualtValue: `FORCE`,
  },
  curCost: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  maxCost: {
    type: Sequelize.INTEGER,
    defualtValue: 0 / 1,
  },
  faction: {
    type: Sequelize.ENUM([
      Object.values(data.factions).map(faction => faction.name),
    ]),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Force;
