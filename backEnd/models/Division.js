const db = require('../db');
const Sequelize = require('sequelize');

const Division = db.define('division', {
  id: {
    type: Sequelize.UUID,
    defualtValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  number: {
    type: Sequelize.INTEGER,
    defualtValue: 1,
  },
  units: {
    type: Sequelize.ARRAY,
    defualtValue: [],
  },
  curCost: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
  },
  commander: {
    type: Sequelize.STRING,
  },
  leadership: {
    type: Sequelize.INTEGER,
    defualtValue: 8,
  },
});

module.exports = Division;
