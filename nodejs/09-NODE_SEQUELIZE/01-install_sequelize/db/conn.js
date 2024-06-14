const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hora-codar-node-sequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// TEST PING in DB
// try {
//   sequelize.authenticate();
//   console.log('Connectamos com sucesso com Sequelize!');
// } catch (error) {
//   console.log('Não foi possível connectar:', error);
// }

module.exports = sequelize;
