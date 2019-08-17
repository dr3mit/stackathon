const router = require('express').Router();
const { User } = require('../models/index');

router.get('/users', (req, res) => {
  User.findAll()
    .then(forces => res.json(forces))
    .catch(e => console.log(e));
});

router.get('/users/:id', (req, res) => {
  User.findByPk(req.params.id)
    .then(user => res.json(user))
    .catch(e => console.log(e));
});

router.post('/users/', (req, res) => {
  User.create({})
    .then(() => {})
    .catch(e => console.log(e));
});

router.put('/users/:id', (req, res) => {
  User.findByPk(req.params.id)
    .then(() => {})
    .catch(e => console.log(e));
});
