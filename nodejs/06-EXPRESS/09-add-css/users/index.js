const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

router.post('/save', (req, res) => {
  const { name } = req.body;
  const { age } = req.body;

  console.log(`Nome: ${name}, Idade: ${age} anos`);
  res.sendFile(`${basePath}/userform.html`);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  console.log(`Buscando usuário de ID: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
