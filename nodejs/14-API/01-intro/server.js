const express = require('express');

const PORT = process.env.PORT;
const server = express();

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.json());

server.post('/createproduct', (req, res) => {
  const { name, price } = req.body;

  if (!name) {
    res.status(422).json({ message: `O campo nome precisa ser enviado!` });
    return;
  }

  console.log(name);
  console.log(price);

  res.status(201).json({
    message: `${name} por R$${price} cadastrado com sucesso!`,
  });
});

server.get('/', (req, res) => {
  res.json({ message: 'Hello World - API' });
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
