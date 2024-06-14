const http = require('http');
const port = 3333;

const server = http.createServer((req, res) => {
  res.write('Hello World - NodeJS');
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port: http://localhost:${port}`);
});
