const express = require('express');
const cors = require('cors');
const UserRoutes = require('./routes/UserRoutes');
const PetRoutes = require('./routes/PetRoutes');

const server = express();
const PORT = process.env.PORT;
const FRONT = process.env.FRONT;

server.use(express.json());

server.use(cors({ credentials: true, origin: `http://localhost:${FRONT}` }));
// let allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// };

// server.use(allowCrossDomain);
server.use(express.static('public'));

server.use('/users', UserRoutes);
server.use('/pets', PetRoutes);

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
