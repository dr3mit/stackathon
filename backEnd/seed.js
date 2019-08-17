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

async function init() {
  await db.sync({ force: true });
  chalk.green(console.log('connected to database'));
  try {
    const rome = await Army.create({
      name: data.factions.IR.name,
      faction: data.factions.IR.name,
      minPercentageLegionaries: 0.5,
    });

    const germany = await Army.create({
      name: data.factions.EG.name,
      faction: data.factions.EG.name,
      minPercentageInfantry: 0.75,
      minPercentageWarband: 0.5,
      timePeriod: data.timePeriod['Germany'].time,
    });

    const legionaries = await Unit.create({
      name: 'Legionaries',
      type: data.types.legionaries,
      cost: 32,
      curCost: 32,
      clash: 7,
      sustained: 7,
      shortRange: 3,
      longRange: 0,
      save: 4,
      stanima: 6,
      weapons: data.constants.weapons.SWORD,
    });

    const legionaries1 = await Unit.create({
      name: 'Legionaries',
      type: data.types.legionaries,
      cost: 32,
      curCost: 32,
      clash: 7,
      sustained: 7,
      shortRange: 3,
      longRange: 0,
      save: 4,
      stanima: 6,
      weapons: data.constants.weapons.SWORD,
    });

    const veteranLegionaries = await Unit.create({
      name: 'Veteran Legionaries',
      type: data.types.legionaries,
      cost: 39,
      curCost: 39,
      clash: 7,
      sustained: 7,
      shortRange: 3,
      longRange: 0,
      save: 4,
      stanima: 6,
      weapons: data.constants.weapons.SWORD,
    });

    const rawRecruits = await Unit.create({
      name: 'Raw Recruit Legionaries',
      type: data.types.legionaries,
      cost: 27,
      curCost: 27,
      clash: 6,
      sustained: 6,
      shortRange: 3,
      longRange: 0,
      save: 4,
      stanima: 6,
      weapons: data.constants.weapons.SWORD,
    });

    const auxiliaMediumInfantry = await Unit.create({
      name: 'Auxiliary Medium Infantry with Spears',
      type: data.types.mediumInfantry,
      cost: 23,
      curCost: 23,
      clash: 6,
      sustained: 6,
      shortRange: 3,
      longRange: 0,
      save: 5,
      stanima: 6,
      weapons: data.constants.weapons.SPEAR,
    });

    const auxiliaLightInfantry = await Unit.create({
      name: 'Auxiliary Light Infantry with Spears',
      type: data.types.lightInfantry,
      cost: 20,
      curCost: 20,
      clash: 5,
      sustained: 5,
      shortRange: 3,
      longRange: 0,
      save: 6,
      stanima: 6,
      weapons: data.constants.weapons.SPEAR,
    });

    const scorpians = await Unit.create({
      name: 'Light Artillery Scorpian Bolt Throwers',
      type: data.types.artillery,
      cost: 18,
      curCost: 18,
      clash: 1,
      sustained: 1,
      shortRange: 2,
      longRange: 2,
      save: 0,
      stanima: 3,
      weapons: data.constants.weapons.ARTILLERY,
    });

    const mediumCavalry = await Unit.create({
      name: 'Auxiliary Medium Cavalry with Spears',
      type: data.types.mediumCavalry,
      cost: 27,
      curCost: 27,
      clash: 8,
      sustained: 5,
      shortRange: -3,
      longRange: 0,
      save: 4,
      stanima: 6,
      weapons: data.constants.weapons.SPEAR,
    });

    const warband = await Unit.create({
      name: 'Medium Infantry Warband',
      type: data.types.warband,
      cost: 28,
      curCost: 28,
      clash: 9,
      sustained: 6,
      shortRange: 2,
      longRange: 0,
      save: 5,
      stanima: 6,
      weapons: data.constants.weapons.SWORD,
    });

    const warband1 = await Unit.create({
      name: 'Medium Infantry Warband',
      type: data.types.warband,
      cost: 28,
      curCost: 28,
      clash: 9,
      sustained: 6,
      shortRange: 2,
      longRange: 0,
      save: 5,
      stanima: 6,
      weapons: data.constants.weapons.SWORD,
    });

    const warband2 = await Unit.create({
      name: 'Medium Infantry Warband',
      type: data.types.warband,
      cost: 28,
      curCost: 28,
      clash: 9,
      sustained: 6,
      shortRange: 2,
      longRange: 0,
      save: 5,
      stanima: 6,
      weapons: data.constants.weapons.SWORD,
    });

    const lightArchers = await Unit.create({
      name: 'Light Archers',
      type: data.types.skirmishers,
      cost: 20,
      curCost: 20,
      clash: 4,
      sustained: 4,
      shortRange: 3,
      longRange: 3,
      save: 0,
      stanima: 4,
      weapons: data.constants.weapons.BOW,
    });

    const mediumGermanCav = await Unit.create({
      name: 'Medium Cavalry with Spears',
      type: data.types.mediumCavalry,
      cost: 28,
      curCost: 28,
      clash: 8,
      sustained: 5,
      shortRange: 3,
      longRange: 0,
      save: 5,
      stanima: 6,
      weapons: data.constants.weapons.SPEAR,
    });

    const force0 = await Force.create({
      maxCost: 300,
      faction: data.factions.IR.name,
    });

    const force1 = await Force.create({
      maxCost: 300,
      faction: data.factions.EG.name,
    });

    const division0 = await Division.create({
      number: 1,
      commander: 'General 1',
      leadership: 9,
    });
    //

    const division1 = await Division.create({
      number: 2,
      commander: 'General 2',
      leadership: 9,
    });

    const upgrade0 = await Upgrade.create({
      name: 'upgrade1',
      effect: '0',
    });

    const upgrade1 = await Upgrade.create({
      name: 'upgrade1',
      effect: '1',
    });

    const upgrade2 = await Upgrade.create({
      name: 'upgrade2',
      effect: '2',
    });

    const feignedFlight = await SpecialRule.create({
      name: 'Feigned Flight',
      rule: '1',
    });
    //

    const stubborn = await SpecialRule.create({
      name: 'Stubborn',
      rule: '1',
    });
    //

    const toughFighters = await SpecialRule.create({
      name: 'Tough Fighters',
      rule: '1',
    });

    const testudo = await SpecialRule.create({
      name: 'Testudo',
      rule: '1',
    });

    const drilled = await SpecialRule.create({
      name: 'Drilled',
      rule: '1',
    });

    const elite = await SpecialRule.create({
      name: 'Elite',
      rule: '1',
    });

    const wildFighter = await SpecialRule.create({
      name: 'Wild Fighter',
      rule: '2',
    });

    const user0 = await User.create({});
    const user1 = await User.create({});

    await legionaries.setSpecialRules([testudo, drilled]);
    await legionaries.setUpgrades([upgrade0, upgrade1]);
    await legionaries1.setSpecialRules([testudo, drilled]);
    await legionaries1.setUpgrades([upgrade0, upgrade1]);
    await veteranLegionaries.setSpecialRules([
      testudo,
      drilled,
      elite,
      toughFighters,
    ]);
    await auxiliaMediumInfantry.setSpecialRules([elite]);
    await auxiliaMediumInfantry.setUpgrades([upgrade0]);

    await warband.setSpecialRules([wildFighter]);
    await warband1.setSpecialRules([wildFighter]);
    await warband2.setSpecialRules([wildFighter]);
    await warband.setUpgrades([upgrade2]);
    await warband1.setUpgrades([upgrade2]);
    await warband2.setUpgrades([upgrade2]);

    await rome.setUnits([
      legionaries,
      veteranLegionaries,
      rawRecruits,
      auxiliaMediumInfantry,
      auxiliaLightInfantry,
      scorpians,
      mediumCavalry,
    ]);

    await germany.setUnits([warband, lightArchers, mediumGermanCav]);

    await division0.setUnits([
      legionaries,
      legionaries1,
      veteranLegionaries,
      auxiliaMediumInfantry,
    ]);

    await division1.setUnits([
      warband,
      warband1,
      warband2,
      lightArchers,
      mediumGermanCav,
    ]);

    await force0.setDivisions([division0]);
    await force1.setDivisions([division1]);

    await user0.setForces([force0]);
    await user1.setForces([force1]);

    console.log('Seeding Done');
    await db.close();
  } catch (e) {
    console.log(e);
  }
}
init();
