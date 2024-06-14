const http = require('http');
const port = 3333;

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true);
  const name = urlInfo.query.name;

  res.statusCode = 200;

  res.setHeader('content-type', 'text/html');

  if (!name) {
    res.end(
      '<h1>Preencha o nome:</h1><form method="GET"><input type="text" name="name" placeholder="Digite seu nome" /><input type="submit" value="Enviar" /></form>'
    );
  } else {
    res.end(`<h2>Olá ${name}!</h2>`);
  }
});

server.listen(port, () => {
  console.log(`Server running at port: http://localhost:${port}`);
});
