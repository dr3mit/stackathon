const constants = require('./constants');
const factions = {
  IR: { name: 'Imperial Rome', timePeriod: '0 AD - 200 AD' },
  MR: { name: 'Marian Rome', timePeriod: '50 BC - 0 BC' },
};
const types = [{ name }];
const specialRules = [{ name, effect }];
const timePeriod = [{ time }];

module.exports = { factions, types, specialRules, timePeriod, constants };
