const express = require('express');
const exphbs = require('express-handlebars');
const server = express();

const PORT = process.env.PORT;

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

// server.engine('handlebars', exphbs.engine);
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

  // Rendering partials
  const posts = [
    {
      thumb:
        'https://openwebsolutions.in/blog/wp-content/uploads/2018/01/banner-1.jpg',
      title: 'Aprender HTML + CSS',
      category: 'HTML',
      body: 'HTML5 é uma tecnologia para desenvolvimento de pro projetos web lorem ipsum dollor ammet...',
      comments: 4,
    },
    {
      thumb:
        'https://www.configuroweb.com/wp-content/uploads/2024/02/Creando-un-Generador-de-Imagenes-con-IA-Utilizando-HTML-CSS-y-JavaScript.webp',
      title: 'Aprender AI',
      category: 'AI',
      body: 'Crie projetos mais rápidos com o poder das IAs lorem ipsum dollor ammet...',
      comments: 4,
    },
    {
      thumb:
        'https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw.png',
      title: 'Aprender NodeJS',
      category: 'NodeJS',
      body: 'Aprender NodeJS te possibilitar ser um Dev fullStack lorem ipsum dollor ammet...',
      comments: 4,
    },
  ];

  res.render('home', {
    colorFavorite,
    user,
    auth1,
    auth2,
    fruits,
    products,
    car1,
    posts,
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
  console.log(`Server running at: http://localhost:${PORT}`);
});
