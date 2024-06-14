const url = require('url');

const address = 'https://meusite.com/catalog?products=chair';

const parseURL = new url.URL(address);

console.log(parseURL.host);
console.log(parseURL.pathname);
console.log(parseURL.search);
console.log(parseURL.searchParams);
console.log(parseURL.searchParams.get('products'));
