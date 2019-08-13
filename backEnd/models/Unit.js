const db = require('../db');
const Sequelize = require('sequelize');

const Unit = db.define('unit', {
  name: {
    type: Sequelize.STRING,
  },
  size,
  numOfModels,
  speed,
  type,
  weapons,
  upgrades,
  curUpgrades,
  cost,
  curCost,
  clash,
  sustained,
  shortRange,
  longRange,
  save,
  stanima,
  specialRules,
  possibleSpecialRules,
});

module.exports = Unit;
