const router = require('express').Router();
const { Force } = require('../models/index');

router.get('/', (req, res) => {
  Force.findAll().then(forces => res.json(forces).catch(e => console.log(e)));
});

router.get('/:id', (req, res) => {
  Force.findByPk(req.params.id)
    .then(force => res.json(force))
    .catch(e => console.log(e));
});

router.post('/', (req, res) => {
  Force.create(req.body.payload)
    .then(force => res.json(force))
    .catch(e => console.log(e));
});

router.put('/:id', (req, res) => {
  Force.finByPk(req.params.id)
    .then(() => {})
    .catch(e => console.log(e));
});

module.exports = router;
