const http = require('http');
const fs = require('fs');
const port = 3333;

const server = http.createServer((req, res) => {
  fs.readFile('message.html', (error, data) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.write(data);

    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at port: http://localhost:${port}`);
});
