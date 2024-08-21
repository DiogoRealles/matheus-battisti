const express = require('express');
const exphbs = require('express-handlebars');
// const mysql = require('mysql');
const pool = require('./db/conn');

const server = express();
const PORT = 3333;

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.json());

server.engine('handlebars', exphbs.engine());

server.set('view engine', 'handlebars');

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.render('home');
});

server.post('/books/insertbook', (req, res) => {
  const { title, pagesqty } = req.body;

  const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`;
  const data = ['title', 'pagesqty', title, pagesqty];

  pool.query(sql, data, (error) => {
    if (error) {
      console.log(error);
      return;
    }

    res.redirect('/books');
  });
});

server.get('/books', (req, res) => {
  const sql = 'SELECT * FROM books';

  pool.query(sql, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    const books = data;
    res.render('books', { books });
  });
});

server.get('/books/:id', (req, res) => {
  const { id } = req.params;

  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ['id', id];

  pool.query(sql, data, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    const book = data[0];

    res.render('book', { book });
  });
});

server.get('/books/edit/:id', (req, res) => {
  const { id } = req.params;

  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ['id', id];

  pool.query(sql, data, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    const book = data[0];

    res.render('editbook', { book });
  });
});

server.post('/books/updatebook', (req, res) => {
  const { id, title, pagesqty } = req.body;

  const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;

  const data = ['title', title, 'pagesqty', pagesqty, 'id', id];

  pool.query(sql, data, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    const book = data[0];

    res.redirect('/books');
  });
});

server.post('/books/remove/:id', (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM books WHERE ?? = ?`;
  const data = ['id', id];

  pool.query(sql, data, (error) => {
    if (error) {
      console.log(error);
      return;
    }

    res.redirect('/books');
  });
});

// CONNECTION VIA MYSQL
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'hora-codar-node-mysql',
// });

// conn.connect((error) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log('Conectou ao MySQL!');
//   server.listen(PORT, () => {
//     console.log(`Server running at port: http://localhost:${PORT}`);
//   });
// });

// CONNECTION VIA POOL
server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
