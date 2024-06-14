const express = require('express');
const PORT = 3333;
const path = require('path');

const server = express();

const basePath = path.join(__dirname, 'templates');

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.json());

server.post('/users/save', (req, res) => {
  const { name } = req.body;
  const { age } = req.body;

  console.log(`Nome: ${name}, Idade: ${age} anos`);
  res.sendFile(`${basePath}/userform.html`);
});

server.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

server.get('/users/:id', (req, res) => {
  const { id } = req.params;

  console.log(`Buscando usuário de ID: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

server.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
