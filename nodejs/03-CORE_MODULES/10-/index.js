const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3333;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes('html')) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, (error, data) => {
        res.writeHead(200, { 'content-type': 'text/html' });

        res.write(data);

        return res.end();
      });
    } else {
      fs.readFile('404.html', (error, data) => {
        res.writeHead(404, { 'content-type': 'text/html' });

        res.write(data);

        return res.end();
      });
    }
  }
});

server.listen(port, () => {
  console.log(`Server running at port: http://localhost:${port}`);
});
