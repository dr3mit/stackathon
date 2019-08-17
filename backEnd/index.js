const express = require('express');
const path = require('path');
const db = require('./db');
const PORT = 8080;
const app = express();
const volleyball = require('volleyball');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

// 'API' routes
app.use('/api/users', require('./api/users'));
app.use('/api/armies', require('./api/armies'));
app.use('/api/forces', require('./api/forces'));
app.use('/api/units', require('./api/units'));
app.use('/api/divisions', require('./api/divisions'));

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use((error, req, res, next) => {
  res.status(404).send(error);
});

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  })
  .catch(e => console.error(e));

module.exports = app;
