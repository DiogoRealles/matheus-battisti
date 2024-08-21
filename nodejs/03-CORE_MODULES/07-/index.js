const http = require('http');
const fs = require('fs');
const port = 3333;

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile('message.html', (error, data) => {
      res.writeHead(200, { 'content-type': 'text/html' });

      res.write(data);

      return res.end();
    });
  } else {
    const nameNewLine = name + ',\r\n';

    fs.appendFile('file.txt', nameNewLine, (error, data) => {
      res.writeHead(302, {
        location: '/',
      });

      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at port: http://localhost:${port}`);
});
