const mongoose = require('mongoose');

main = async () => {
  await mongoose.connect('mongodb://localhost:27017/testemongose');

  console.log('Conectou ao MongoDB com Mongoose!');
};

main().catch((error) => console.log(error));

module.exports = mongoose;
