const express = require('express');
const cors = require('cors');
const UserRoutes = require('./routes/UserRoutes');
const PetRoutes = require('./routes/PetRoutes');

const server = express();
const PORT = process.env.PORT;
const localhost = `http://localhost:${PORT}`;

server.use(express.json());

server.use(cors({ credentials: true, origin: localhost }));

server.use(express.static('public'));

server.use('/users', UserRoutes);
server.use('/pets', PetRoutes);

server.listen(PORT, () => {
  console.log(`Server running at: ${localhost}`);
});
