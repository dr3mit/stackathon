const router = require('express').Router();
const { Army } = require('../models/index');

router.get('/', (req, res) => {
  Army.findAll()
    .then(armies => res.json(armies))
    .catch(e => console.log(e));
});

router.get('/:id', (req, res) => {
  Army.findByPk(req.params.id)
    .then(army => res.json(army))
    .catch(e => console.log(e));
});

module.exports = router;
