const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const Unit = db.define('unit', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
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
    type: Sequelize.ENUM([
      data.constants.sizes.TINY,
      data.constants.sizes.SMALL,
      data.constants.sizes.STANDARD,
      data.constants.sizes.LARGE,
    ]),
    defaultValue: data.constants.sizes.STANDARD,
  },
  numOfModels: {
    type: Sequelize.INTEGER,
    defaultValue: 16,
  },
  speed: {
    type: Sequelize.INTEGER,
    defaultValue: 6,
  },
  type: {
    type: Sequelize.ENUM(Object.values(data.types)),
  },
  weapons: {
    type: Sequelize.ENUM(Object.values(data.constants.weapons)),
  },
  // upgrades: {
  //   type: Sequelize.ARRAY(Object),
  //   defualtValue: [],
  // },
  // curUpgrades: {
  //   type: Sequelize.ARRAY(Object),
  //   defualtValue: [],
  // },
  cost: {
    type: Sequelize.INTEGER,
    defaultValue: -1,
  },
  curCost: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  clash: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  sustained: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  shortRange: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  longRange: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  save: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  stanima: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  // possibleSpecialRules: {
  //   type: Sequelize.ARRAY(Object),
  //   defualtValue: data.specialRules,
  // },
  // specialRules: {
  //   type: Sequelize.ENUM(data.specialRules),
  // },
});

module.exports = Unit;
