const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const conn = require('./db/conn');

const PORT = process.env.PORT;

const server = express();

const Tought = require('./models/Tought');
const User = require('./models/User');

const toughtsRoutes = require('./routes/toughtsRoutes');
const authRoutes = require('./routes/authRoutes');

const ToughtController = require('./controllers/ToughtController');
const AuthController = require('./controllers/AuthController');

server.use(express.static('public'));

server.engine('handlebars', exphbs.engine());
server.set('view engine', 'handlebars');
server.use(express.urlencoded({ extend: true }));

server.use(express.json());

server.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'session'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

server.use(flash());

server.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
});

server.use('/toughts', toughtsRoutes);

server.get('/', ToughtController.showToughts);

server.use('/', authRoutes);
// server.use('/register', AuthController.register);

conn
  .sync()
  // .sync({ force: true })
  .then(
    server.listen(PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${PORT}`);
    })
  )
  .catch((error) => console.log(error));
