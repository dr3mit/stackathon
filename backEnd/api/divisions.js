const router = require('express').Router();
const { Division } = require('../models/index');

router.get('/divisions', (req, res) => {
  Division.findAll()
    .then(divisions => res.json(divisions))
    .catch(e => console.log(e));
});

router.get('/division/:id', (req, res) => {
  Division.findByPk(req.params.id)
    .then(division => res.json(division))
    .catch(e => console.log(e));
});

router.post('/division', (req, res) => {
  const { number, curCost } = req.body;
  Division.create({ number, curCost })
    .then(division => res.json(division))
    .catch(e => console.log(e));
});
