const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT;

const server = express();

const conn = require('./db/conn');

server.engine('handlebars', exphbs.engine());

server.set('view engine', 'handlebars');

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.json());

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
