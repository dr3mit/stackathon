const db = require('../db');
const Sequelize = require('sequelize');

const Division = db.define('division', {
  number: {
    type: Sequelize.INTEGER,
  },
  units,
  curCost,
  commander,
  leadership,
});

module.exports = Division;
