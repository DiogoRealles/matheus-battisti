const express = require('express');
const PORT = 3333;
const path = require('path');

const server = express();

const basePath = path.join(__dirname, 'templates');

const checkAuth = (req, res, next) => {
  req.authStatus = true;

  if (req.authStatus) {
    console.log('Logado, continue...');
    next();
  } else {
    console.log('Não esta logado, faça o login para continuar!');
    next();
  }
};

server.use(checkAuth);

server.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
