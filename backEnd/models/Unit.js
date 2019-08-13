const db = require('../db');
const Sequelize = require('sequelize');
const {
  TINY,
  SMALL,
  STANDARD,
  LARGE,
  HEAVY_INFANTRY,
  SWORD,
} = require('../../constants');

const Unit = db.define('unit', {
  name: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.ENUM([TINY, SMALL, STANDARD, LARGE]),
  },
  numOfModels: {
    type: Sequelize.INTEGER,
  },
  speed: {
    type: Sequelize.INTEGER,
  },
  type: {
    type: Sequelize.ENUM([HEAVY_INFANTRY]),
  },
  weapons: {
    type: Sequelize.ENUM([SWORD]),
  },
  upgrades: {
    type: Sequelize.ARRAY,
  },
  curUpgrades: {
    type: Sequelize.ARRAY,
  },
  cost: {
    type: Sequelize.INTEGER,
  },
  curCost: {
    type: Sequelize.INTEGER,
  },
  clash: {
    type: Sequelize.INTEGER,
  },
  sustained: {
    type: Sequelize.INTEGER,
  },
  shortRange: {
    type: Sequelize.INTEGER,
  },
  longRange: {
    type: Sequelize.INTEGER,
  },
  save: {
    type: Sequelize.INTEGER,
  },
  stanima: {
    type: Sequelize.INTEGER,
  },
  specialRules: {
    type: Sequelize.ENUM(this.possibleSpecialRules),
  },
  possibleSpecialRules: {
    type: Sequelize.ARRAY,
  },
});

module.exports = Unit;
