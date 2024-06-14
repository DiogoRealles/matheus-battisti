const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_mvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  console.log('Conectamos ao MySQL!');
} catch (error) {
  console.log(`Não foi possível conctar: ${error}`);
}

module.exports = sequelize;
