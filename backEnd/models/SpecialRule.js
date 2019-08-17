//special rule model for units
const db = require('../db');
const Sequelize = require('sequelize');

const SpecialRule = db.define('specialRule', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: 'Special Rule',
  },
  rule: {
    type: Sequelize.STRING,
    defaultValue: 'Rule',
  },
});

module.exports = SpecialRule;
