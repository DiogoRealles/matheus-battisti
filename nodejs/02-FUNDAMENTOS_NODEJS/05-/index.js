const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args['name'];

console.log(name);

const role = args['role'];

console.log(role);

console.log(`Nome: ${name}, Profissão: ${role}`);
