//special rule model for units
const db = require('../db');
const Sequelize = require('sequelize');

const SpecialRule = db.define('specialRule', {
  name: {
    type: Sequelize.STRING,
    defualtValue: 'Special Rule',
  },
  rule: {
    type: Sequelize.STRING,
    defualtValue: 'Rule',
  },
});

module.exports = SpecialRule;
