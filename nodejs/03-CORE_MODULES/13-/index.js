const path = require('path');

console.log(path.resolve('file.txt'));

const midFolder = 'relatorios';
const filename = 'diogo.txt';

const finalPath = path.join('/', 'files', midFolder, filename);

console.log(finalPath);
