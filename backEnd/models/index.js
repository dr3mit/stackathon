const db = require('../db');
const Army = require('./Army');
const Unit = require('./Unit');
const Division = require('./Division');
const Force = require('./Force');
const User = require('./User');
const SpecialRule = require('./SpecialRule');
const Upgrade = require('./Upgrade');
const data = require('../../data');

Army.hasMany(Unit);
Unit.belongsTo(Army);

Force.hasMany(Division);
Division.belongsTo(Force);

Division.hasMany(Unit);
Unit.belongsTo(Division);

Unit.hasMany(SpecialRule);
SpecialRule.belongsTo(Unit);
Unit.hasMany(Upgrade);
Upgrade.belongsTo(Unit);

User.hasMany(Force);
Force.belongsTo(User);

module.exports = {
  db,
  Army,
  Unit,
  Division,
  Force,
  User,
  SpecialRule,
  Upgrade,
  data,
};
