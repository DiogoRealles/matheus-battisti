const fs = require('fs');

console.log('Início');

fs.writeFile('arquiv_assincrono.txt', 'Hello World - NodeJS', (error) => {
  setTimeout(() => {
    console.log('Arquivo criado!');
  }, 3000);
});

console.log('Fim!');
