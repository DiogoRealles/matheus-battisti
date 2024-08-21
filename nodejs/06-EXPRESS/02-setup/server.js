const express = require('express');
const PORT = 3333;

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World - Express');
});

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
