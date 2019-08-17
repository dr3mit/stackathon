const router = require('express').Router();
const { Force } = require('../models/index');

router.get('/forces', (req, res) => {
  Force.findAll().then(forces => res.json(forces).catch(e => console.log(e)));
});

router.get('/forces/:id', (req, res) => {
  Force.finByPk(req.params.id)
    .then(force => res.json(force))
    .catch(e => console.log(e));
});

router.post('/forces', (req, res) => {
  Force.create({})
    .then(force => res.json(force))
    .catch(e => console.log(e));
});

router.put('/forces/:id', (req, res) => {
  Force.finByPk(req.params.id)
    .then(() => {})
    .catch(e => console.log(e));
});
