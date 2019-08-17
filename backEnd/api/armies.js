const router = require('express').Router();
const { Army } = require('../models/index');

router.get('/armies', (req, res) => {
  Army.findAll()
    .then(armies => res.json(armies))
    .catch(e => console.log(e));
});

router.get('/army/:id', (req, res) => {
  Army.findByPk(req.params.id)
    .then(army => res.json(army))
    .catch(e => console.log(e));
});
