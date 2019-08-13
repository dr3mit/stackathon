const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const Army = db.define('army', {
  name: {
    type: Sequelize.STRING,
    defualtValue: `FORCE`,
  },
  maxCost: {
    type: Sequelize.INTEGER,
    defualtValue: 0 / 1,
  },
  faction: {
    type: Sequelize.ENUM([data.factions]),
    allowNull: false,
  },
  detachments: {
    type: Sequelize.ARRAY,
  },
  curCost: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  units: {
    type: Sequelize.ARRAY,
  },
  curUnits: {
    type: Sequelize.ARRAY,
  },
  minUnitsPerDetachment: {
    type: Sequelize.INTEGER,
    defualtValue: 4,
  },
  minPercentageInfantry: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.5,
  },
  minPercentageCalavry: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  maxPercentageCavalry: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.25,
  },
  maxPercentageInfantry: {
    type: Sequelize.DECIMAL,
    defualtValue: 1,
  },
  maxNumArty: {
    type: Sequelize.INTEGER,
    defualtValue: 0.0,
  },
  maxNumElephants: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  maxNumChariots: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  maxPercentageChariots: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  minNumChariots: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  minNumLegionaries: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  minNumHeavyInfantry: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  minPercentageLegionaries: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  minPercentageHeavyInfantry: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  maxPercentageLegionaries: {
    type: Sequelize.DECIMAL,
    defualtValue: 1,
  },
  maxPercentageHeavyInfantry: {
    type: Sequelize.DECIMAL,
    defualtValue: 1,
  },
  maxPercentageSkirimshersPerDivision: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.5,
  },
  minPercentageLightInfantry: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  minPercentageWarbands: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  minPercentageMediumInfantry: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  maxPercentagePikes: {
    type: Sequelize.DECIMAL,
    defualtValue: 1,
  },
  maxNumPikes: {
    type: Sequelize.INTEGER,
    defualtValue: 0 / 1,
  },
  minPercentagePikes: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  minNumPikes: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  maxPercentageHorseArchers: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  maxNumHorseArchers: {
    type: Sequelize.INTEGER,
    defualtValue: 0 / 1,
  },
  minPercentageHorseArchers: {
    type: Sequelize.DECIMAL,
    defualtValue: 0.0,
  },
  minNumHorseArchers: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  miscRequirements,
  timePeriod: {
    type: Sequelize.ENUM([data.timePeriods]),
  },
});

module.exports = Army;
