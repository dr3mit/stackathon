const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const Unit = db.define('unit', {
  id: {
    type: Sequelize.UUID,
    defualtValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  size: {
    type: Sequelize.ENUM([TINY, SMALL, STANDARD, LARGE]),
    defualtValue: STANDARD,
  },
  numOfModels: {
    type: Sequelize.INTEGER,
    defualtValue: 16,
    s,
  },
  speed: {
    type: Sequelize.INTEGER,
    defualtValue: 6,
  },
  type: {
    type: Sequelize.ENUM([HEAVY_INFANTRY]),
  },
  weapons: {
    type: Sequelize.ENUM([data.constants.weapons]),
  },
  upgrades: {
    type: Sequelize.ARRAY,
  },
  curUpgrades: {
    type: Sequelize.ARRAY,
    defualtValue: [],
  },
  cost: {
    type: Sequelize.INTEGER,
    defualtValue: 1 / 0,
  },
  curCost: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  clash: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  sustained: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  shortRange: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  longRange: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  save: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  stanima: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  possibleSpecialRules: {
    type: Sequelize.ARRAY,
    defualtValue: data.specialRules,
  },
  specialRules: {
    type: Sequelize.ENUM(data.specialRules),
  },
});

module.exports = Unit;
