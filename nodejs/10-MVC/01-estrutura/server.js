const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const server = express();
const PORT = 3333;

const Task = require('./models/Task');

const tasksRoutes = require('./routes/tasksRoutes');

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.json());

server.engine('handlebars', exphbs.engine());

server.set('view engine', 'handlebars');

server.use(express.static('public'));

server.use('/tasks', tasksRoutes);

conn
  .sync()
  // .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running at port: http://localhost:${PORT}`);
    });
  });
