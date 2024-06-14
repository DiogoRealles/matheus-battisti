const express = require('express');
const exphbs = require('express-handlebars');
const server = express();
const PORT = 3333;

server.engine('handlebars', exphbs.engine());

server.set('view engine', 'handlebars');

server.use(express.static('public'));

server.get('/', (req, res) => {
  // Rendering variable simple
  const colorFavorite = 'metal blue';

  // Rendering object
  const user = {
    name: 'Diogo',
    surname: 'Realles',
    role: 'Front-end Developer',
  };

  // Rendering conditional
  const auth1 = true;
  const auth2 = false;

  // Rendering array simple
  const fruits = ['apple', 'banana', 'cherry', 'damasco'];

  // Rendering array object
  const products = [
    {
      name: 'Notebook',
      price: '1.999,99',
    },
    {
      name: 'Smartphone',
      price: '999,99',
    },
    {
      name: 'Tablet',
      price: '799,99',
    },
  ];

  // Rendering object with
  const car1 = {
    brand: 'Slingshot',
    model: 'S',
    whells: '3',
    price: '21,999',
    color: 'white',
  };

  res.render('home', {
    user,
    colorFavorite,
    auth1,
    auth2,
    fruits,
    products,
    car1,
  });
});

server.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

server.get('/signin', (req, res) => {
  res.render('signin');
});

server.get('/signup', (req, res) => {
  res.render('signup');
});

server.use((req, res, next) => {
  res.status(404).render('404');
});

server.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
