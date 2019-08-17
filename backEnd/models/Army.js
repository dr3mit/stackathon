const db = require('../db');
const Sequelize = require('sequelize');
const data = require('../../data');

const Army = db.define('army', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: `FORCE`,
  },
  faction: {
    type: Sequelize.ENUM(
      Object.values(data.factions).map(faction => faction.name)
    ),
    allowNull: false,
  },
  minUnitsPerDivision: {
    type: Sequelize.INTEGER,
    defaultValue: 4,
  },
  minPercentageInfantry: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.5,
  },
  minPercentageCalavry: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  maxPercentageCavalry: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.25,
  },
  maxPercentageInfantry: {
    type: Sequelize.DECIMAL,
    defaultValue: 1,
  },
  maxNumArty: {
    type: Sequelize.INTEGER,
    defaultValue: 0.0,
  },
  maxNumElephants: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  maxNumChariots: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  maxPercentageChariots: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  minNumChariots: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  minNumLegionaries: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  minNumHeavyInfantry: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  minPercentageLegionaries: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  minPercentageHeavyInfantry: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  maxPercentageLegionaries: {
    type: Sequelize.DECIMAL,
    defaultValue: 1,
  },
  maxPercentageHeavyInfantry: {
    type: Sequelize.DECIMAL,
    defaultValue: 1,
  },
  maxPercentageSkirimshersPerDivision: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.5,
  },
  minPercentageLightInfantry: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  minPercentageWarbands: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  minPercentageMediumInfantry: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  maxPercentagePikes: {
    type: Sequelize.DECIMAL,
    defaultValue: 1,
  },
  maxNumPikes: {
    type: Sequelize.INTEGER,
    defaultValue: -1,
  },
  minNumPikes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  minPercentagePikes: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  minNumPikes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  maxNumHoplites: {
    type: Sequelize.INTEGER,
    defaultValue: -1,
  },
  minPercentageHoplites: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  minNumHoplites: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  minNumHoplites: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  maxPercentageHorseArchers: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  maxNumHorseArchers: {
    type: Sequelize.INTEGER,
    defaultValue: -1,
  },
  minPercentageHorseArchers: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
  },
  minNumHorseArchers: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  timePeriod: {
    type: Sequelize.ENUM(
      Object.values(data.timePeriod).map(period => period.time)
    ),
    defaultValue: data.timePeriod['Pax Romana'].time,
  },
});

module.exports = Army;
