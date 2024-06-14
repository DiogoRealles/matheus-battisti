const http = require('http');
const port = 3333;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('content-type', 'text/html');

  res.end('<h1>Hello World - NodeJS</h1>');
});

server.listen(port, () => {
  console.log(`Server running at port: http://localhost:${port}`);
});
