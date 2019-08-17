const router = require('express').Router();
const { Unit } = require('../models/index');

router.get('/', (req, res) => {
  Unit.findAll()
    .then(units => res.json(units))
    .catch(e => console.log(e));
});

router.get('/:id', (req, res) => {
  Unit.findByPk(req.params.id)
    .then(unit => res.json(unit))
    .catch(e => console.log(e));
});

module.exports = router;
