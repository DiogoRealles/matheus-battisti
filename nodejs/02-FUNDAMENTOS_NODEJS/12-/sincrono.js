const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo_sincrono.txt', 'Hello Wolrd - NodeJS');

console.log('Fim!');
