const fs = require('fs');

if (!fs.existsSync('./my_folder')) {
  console.log('Não existe!');

  fs.mkdirSync('my_folder');
} else if (fs.existsSync('./my_folder')) {
  console.log('Existe!');
}
