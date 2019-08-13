const db = require('../db');
const Army = require('./Army');
const Unit = require('./Unit');
const Divison = require('./Division');
const data = require('../../data');

Army.hasMany(Unit);
Unit.belongsTo(Army);
Army.hasMany(Division);
Divison.belongsTo(Army);
Army.hasMany(Divison);
Divison.belongsTo(Arm);

module.exports = { db, Army, Unit, Division, data };
