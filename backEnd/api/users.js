const router = require('express').Router();
const { User } = require('../models/index');

router.get('/', (req, res) => {
  User.findAll()
    .then(forces => res.json(forces))
    .catch(e => console.log(e));
});

router.get('/:id', (req, res) => {
  User.findByPk(req.params.id)
    .then(user => res.json(user))
    .catch(e => console.log(e));
});

router.post('/', (req, res) => {
  User.create({})
    .then(() => {})
    .catch(e => console.log(e));
});

router.put('/:id', (req, res) => {
  User.findByPk(req.params.id)
    .then(() => {})
    .catch(e => console.log(e));
});

module.exports = router;
