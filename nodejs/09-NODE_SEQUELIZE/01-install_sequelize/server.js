const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const User = require('./models/User');
const Address = require('./models/Address');

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

server.get('/', async (req, res) => {
  const users = await User.findAll({ raw: true });

  console.log(users);

  res.render('home', { users });
});

server.get('/users/create', (req, res) => {
  res.render('adduser');
});

server.post('/users/create', async (req, res) => {
  const { name, occupation } = req.body;
  let { newsletter } = req.body;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  // console.log(req.body);

  await User.create({ name, occupation, newsletter });

  res.redirect('/');
});

server.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render('userview', { user });
});

server.post('/users/delete/:id', async (req, res) => {
  const { id } = req.params;

  await User.destroy({ where: { id } });

  res.redirect('/');
});

server.get('/users/edit/:id', async (req, res) => {
  const { id } = req.params;

  // SEM RELACIONAMENTO
  // const user = await User.findOne({ raw: true, where: { id } });

  // SEM RELACIONAMENTO
  // res.render('useredit', { user });

  // COM RELACIONAMENTO
  try {
    const user = await User.findOne({ include: Address, where: { id } });

    // COM RELACIONAMENTO
    res.render('useredit', { user: user.get({ plain: true }) });
  } catch (error) {
    console.log(error);
  }
});

server.post('/users/update', async (req, res) => {
  const { id, name, occupation } = req.body;
  let { newsletter } = req.body;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };

  await User.update(userData, { where: { id } });

  res.redirect('/');
});

server.post('/address/create', async (req, res) => {
  const { UserId, street, number, city } = req.body;

  const address = {
    UserId,
    street,
    number,
    city,
  };

  await Address.create(address);

  res.redirect(`/users/edit/${UserId}`);
});

server.post('/address/delete', async (req, res) => {
  const { UserId, id } = req.body;

  await Address.destroy({
    where: { id },
  });

  res.redirect(`/users/edit/${UserId}`);
});

conn
  .sync()
  // .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running at port: http://localhost:${PORT}`);
    });
  });
