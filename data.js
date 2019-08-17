const constants = require('./constants');
const factions = {
  IR: { name: 'Imperial Rome', timePeriod: '0 AD - 200 AD' },
  MR: { name: 'Marian Rome', timePeriod: '50 BC - 0 BC' },
  EG: { name: 'Early Germans', timePeriod: '0 AD - 300 AD' },
};
const types = {
  heavyInfantry: 'Heavy Infantry',
  legionaries: 'Legionaries',
  mediumInfantry: 'Medium Infantry',
  lightInfantry: 'Light Infantry',
  warband: 'Warband',
  cavalry: 'Cavalry',
  chariots: 'Chariots',
  skirmishers: 'Skirimishers',
  artillery: 'Artillery',
};
// const specialRules = [
//   {
//     testudo: '+2 save from shooting attacks.',
//     elite: 'Re-roll 1 to hit roll.',
//   },
// ];
const timePeriod = {
  PaxRomana: { time: '20 BC - 200 AD' },
  Germany: { time: '200 BC - 200 AD' },
};

module.exports = { factions, types, timePeriod, constants };
