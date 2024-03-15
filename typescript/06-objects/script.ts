// interface
interface Product {
  name: string,
  price:number,
  isAvailable: boolean,
  propertyOptional?: string
}
function showProductDetails(product: Product){
  console.log(`Product: ${product.name} - Price: ${product.price}`);
  if(product.isAvailable){
    console.log('Produto disponível');
  }

  if(product.propertyOptional){
    console.log(`Property Optional!`);
  }
}
const shirt: Product = {
  name: 'Shirt',
  price: 19.99,
  isAvailable: true
}
console.log(showProductDetails(shirt));

const shoes: Product = {
  name: 'Shoes',
  price: 19.99,
  isAvailable: true,
  propertyOptional: 'Property Optional'
}
console.log(showProductDetails(shoes));


// readonly
interface Car{
  brand: string,
  readonly wheels: number
}
const ferrari: Car = {
  brand: 'Ford',
  wheels: 4
}
console.log(ferrari);
ferrari.brand = 'Ferrari';
// ferrari.wheels = 5; // not changed because readonly property
console.log(ferrari);


// index signature - quando não sabemos o nome da key, mas já sabemos os TIPOS das values dos Objetos ou Arrays
interface CoodObj {
  [index: string]: number
}
let coords: CoodObj = {
  x: 10
}


// extending types - uma interface pode herdar propriedades de outra
interface Human {
  name: string,
  age: number
}
interface SuperHuman extends Human{
  superpowers: string[]
}
const suguha: Human = {
  name: 'Suguha',
  age: 22
}
const asuna: SuperHuman ={
  name: 'Asuna',
  age: 24,
  superpowers: ['fire', 'speed', 'sword']
}

console.log(suguha);
console.log(asuna);


// intersection types
interface Character{
  name: string
}
interface Gun{
  type: string,
  caliber: number
}
type HumanWithGun = Character & Gun;
const sinon: HumanWithGun = {
  name: 'Sinon',
  type: 'Barret',
  caliber: 0.50
}
console.log(sinon);


// readonly array - limita a qtd de itens, mas permite alterar os valores
let fruits: ReadonlyArray<string> = ['banana', 'peach', 'grapefruit'];
// fruits[3] = 'strawberry'; // fruits[] not changed because readonly index
console.log(fruits);
