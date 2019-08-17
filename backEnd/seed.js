const {
  db,
  Army,
  Division,
  Unit,
  Force,
  SpecialRule,
  Upgrade,
  User,
  data,
} = require('./models/index');
const chalk = require('chalk');

db.sync({ force: true })
  .then(() => {
    chalk.green(console.log('connected to database'));
  })
  .then(() => {
    let armies = {};
    let divisons = {};
    let units = {};
    let forces = {};
    let specialRules = {};
    let upgrades = {};
    let users = {};
    //console.log(data.factions.IR.name.toString());
    //armies
    armies[data.factions.IR.name] = Army.create({
      name: data.factions.IR.name,
      faction: data.factions.IR.name,
      minPercentageLegionaries: 0.5,
    })
      .then(army => army)
      .catch(e => console.log(e));

    armies[data.factions.EG.name] = Army.create({
      name: data.factions.EG.name,
      faction: data.factions.EG.name,
      //minPercentageLegionaries: 0.5,
    })
      .then(army => army)
      .catch(e => console.log(e));

    units['unit0'] = Unit.create({
      name: 'Legionaries',
      type: 'Legionaries',
      upgrades: 'Veteran',
      cost: 32,
      curCost: 32,
      clash: 7,
      sustained: 7,
      shortRange: 2,
      longRange: 0,
      save: 4,
      stanima: 6,
    })
      .then(unit => unit)
      .catch(e => console.log(e));

    units['unit1'] = Unit.create({
      name: 'Legionaries',
      type: 'Legionaries',
      upgrades: 'Veteran',
      cost: 32,
      curCost: 32,
      clash: 7,
      sustained: 7,
      shortRange: 2,
      longRange: 0,
      save: 4,
      stanima: 6,
    })
      .then(unit => unit)
      .catch(e => console.log(e));

    units['unit2'] = Unit.create({
      name: 'Warband',
      type: data.types.legionaries,
      upgrades: 'Veteran',
      cost: 32,
      curCost: 32,
      clash: 7,
      sustained: 7,
      shortRange: 2,
      longRange: 0,
      save: 4,
      stanima: 6,
    })
      .then(unit => unit)
      .catch(e => console.log(e));

    units['unit3'] = Unit.create({
      name: 'Warband',
      type: data.types.warband,
      upgrades: 'Veteran',
      cost: 32,
      curCost: 32,
      clash: 7,
      sustained: 7,
      shortRange: 2,
      longRange: 0,
      save: 4,
      stanima: 6,
    })
      .then(unit => unit)
      .catch(e => console.log(e));

    ////////
    // armies[data.factions.IR.name]
    //   .setUnit(units['unit0'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // armies[data.factions.IR.name]
    //   .setUnit(units['unit1'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // armies[data.factions.EG.name]
    //   .setUnit(units['unit2'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // armies[data.factions.EG.name]
    //   .setUnit(units['unit3'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // //Forces

    forces['force0'] = Force.create({
      maxCost: 300,
      faction: data.factions.IR.name,
    })
      .then(() => {})
      .catch(e => console.log(e));

    forces['force1'] = Force.create({
      maxCost: 300,
      faction: data.factions.EG.name,
    })
      .then(() => {})
      .catch(e => console.log(e));

    divisons['division0'] = Division.create({
      number: 1,
      commander: 'General 1',
      leadership: 9,
    })
      .then(division => division)
      .catch(e => console.log(e));

    divisons['division1'] = Division.create({
      number: 2,
      commander: 'General 2',
      leadership: 9,
    })
      .then(division => division)
      .catch(e => console.log(e));

    upgrades['upgrade0'] = Upgrade.create({
      name: '1',
      effect: '1',
    })
      .then(upgrade => upgrade)
      .catch(e => console.log(e));

    upgrades['upgrade1'] = Upgrade.create({
      name: '1',
      effect: '1',
    })
      .then(upgrade => upgrade)
      .catch(e => console.log(e));

    specialRules['specialRule0'] = SpecialRule.create({
      name: '1',
      rule: '1',
    })
      .then(specialRule => specialRule)
      .catch(e => console.log(e));

    specialRules['specialRule1'] = SpecialRule.create({
      name: '1',
      rule: '1',
    })
      .then(specialRule => specialRule)
      .catch(e => console.log(e));

    users['user0'] = User.create({})
      .then(() => {})
      .cathc(e => console.log(e));

    users['user1'] = User.create({})
      .then(() => {})
      .cathc(e => console.log(e));

    // divisons['division0']
    //   .setUnit(units['unit0'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // divisons['division0']
    //   .setUnit(units['unit1'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // divisons['division1']
    //   .setUnit(units['unit2'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // divisons['division1']
    //   .setUnit(units['unit3'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // forces['force0']
    //   .setDivison(divisons['divison0'])
    //   .then(() => {})
    //   .cathc(e => console.log(e));

    // forces['force1']
    //   .setDivison(divisons['divison1'])
    //   .then(() => {})
    //   .cathc(e => console.log(e));

    // forces['force0']
    //   .setUnit(units['unit0'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // forces['force0']
    //   .setUnit(units['unit1'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // forces['force1']
    //   .setUnit(units['unit2'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    // forces['force1']
    //   .setUnit(units['unit3'])
    //   .then(() => {})
    //   .catch(e => console.log(e));

    console.log('Seeding complete');
  })
  .catch(e => console.log(e));
