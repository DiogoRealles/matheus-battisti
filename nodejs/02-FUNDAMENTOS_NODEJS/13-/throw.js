const x = 10;

if (!Number.isInteger(x)) {
  throw new Error('O valor de x não pe um número inteiro!');
}

console.log('Continuando código...');
