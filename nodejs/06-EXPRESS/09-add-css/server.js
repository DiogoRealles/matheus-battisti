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

server.use(express.static('public'));

const users = require('./users');

server.use('/users', users);

server.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
