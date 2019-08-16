const db = require('../db');
const Army = require('./Army');
const Unit = require('./Unit');
const Divison = require('./Division');
const Force = require('./Force');
const User = require('./User');
const data = require('../../data');

Army.hasMany(Unit);
Unit.belongsTo(Army);

Force.hasMany(Division);
Divison.belongsTo(Force);
Division.hasMany(Unit);
Unit.belongsTo(Division);

User.hasMany(Force);
Force.belongsTo(User);

module.exports = { db, Army, Unit, Division, Force, User, data };
