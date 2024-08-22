const chalk = require('chalk');
const express = require('express');
const server = express();

const PORT = process.env.PORT;

server.get('/', (req, res) => {
  res.send('Hello World - Express');
});

server.listen(PORT, () => {
  console.log(
    chalk.bgGreen.black(`Server running at: http://localhost:${PORT}`)
  );
});
