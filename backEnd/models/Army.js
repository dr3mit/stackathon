const db = require('../db');
const Unit = require('./Unit');

const Army = db.define('army', {
  name: {
    type: Sequelize.STRING,
  },
  maxSize: {
    type: Sequelize,
  },
  faction,
  detachments: { type: Sequelize },
  curSize: { type: Sequelize },
  units: { type: Sequelize },
  curUnits: { type: Sequelize },
  minUnitsPerDetachment: { type: Sequelize },
  minPercentageInfantry: { type: Sequelize },
  minPercentageCalavry: { type: Sequelize },
  maxPercentageCavalry: { type: Sequelize },
  maxPercentageInfantry: { type: Sequelize },
  maxNumArty: { type: Sequelize },
  maxNumElephants: { type: Sequelize },
  maxNumChariots: { type: Sequelize },
  maxPercentageChariots: { type: Sequelize },
  minNumChariots: { type: Sequelize },
  minNumLegionaries: { type: Sequelize },
  minNumHeavyInfantry: { type: Sequelize },
  minPercentageLegionaries: { type: Sequelize },
  minPercentageHeavyInfantry: { type: Sequelize },
  maxPercentageLegionaries: { type: Sequelize },
  maxPercentageHeavyInfantry: { type: Sequelize },
  maxPercentageSkirimshersPerDivision: { type: Sequelize },
  minPercentageLightInfantry: { type: Sequelize },
  minPercentageWarbands: { type: Sequelize },
  minPercentageMediumInfantry: { type: Sequelize },
  maxPercentagePikes,
  maxNumPikes,
  minPercentagePikes,
  minNumPikes,
  maxPercentageHorseArchers,
  maxNumHorseArchers,
  minPercentageHorseArchers,
  minNumHorseArchers,
  miscRequirements,
  timePeriod,
});

Army.hasMany(Unit);
Unit.belongsTo(Army);

module.exports = Army;
