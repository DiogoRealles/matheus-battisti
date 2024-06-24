const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT;

const server = express();

const conn = require('./db/conn');

const productsRouter = require('./routes/productsRoutes');

server.engine('handlebars', exphbs.engine());

server.set('view engine', 'handlebars');

server.use(express.static('public'));

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.json());

server.use('/products', productsRouter);

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
