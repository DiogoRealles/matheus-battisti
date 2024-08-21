// string
let color: string = 'Purple Rain';
console.log('string: ' + color);


// number
let numberSort: number = 42;
console.log('number: ' + numberSort);


// boolean
let sliping: boolean = false;
console.log('boolean: ' + sliping);


// array string
let fruits: string[] = ['banana', 'peach', 'grape'];
console.log('array - string: ' + fruits);

// array number
let points: number[] = [2, 3, 8, 5];
console.log('array - number: ' + points);


// array boolean
let quizz: boolean[] = [false, false, true, false];
console.log('array - boolean: ' + quizz);


// tuplas
let myStacks: [string, number, boolean, string[]] = ['', 9, false, ['banana', 'peach']];


// array - tuplas
let anything: [string, number, boolean] = ['melância', 3, true];
console.log(anything);


// object literals
let user: {name: string, age: number, programing: boolean} = {
  name: '',
  age: 32,
  programing: true
}


// literal type
let drink: 'Juice Orange';
drink = 'Juice Orange';

type directionHorizontal = "left" | "center" | "right";
type directionVertical = "top" | "center" | "bottom";

function showDirection(direction: directionHorizontal, direction_: directionVertical){
  return `Go to ${direction} and ${direction_}`;
}
showDirection('center', 'top');


// literal type - 01
function showAlign(direction: 'left' | 'center' | 'right'){
  console.log(`text-align: ${direction}`);
}
showAlign('left');
showAlign('center');
showAlign('right');


// literal type - 02
let pet: 'Cão' | 'Gato';
pet = 'Cão';
console.log(pet);


// objetos - 01
function characterFeature(feature: {heght: number, weight: number}){
  console.log(`Heght character: ${feature.heght}`);
  console.log(`Weight character: ${feature.weight}`);
}
const objCharacter = {
  heght: 1.78,
  weight: 80.2
}
characterFeature(objCharacter);


// objetos - 02
let car: {brand: string, sale: boolean, wheels: number} = {
  brand: 'VW',
  sale: false,
  wheels: 4
}
console.log(car);


// unio type
let id: string | number;
id = 369;
id = 'J117';


// union type - 01
function showBalance(balance: string | number){
  console.log(`The account balance is: ${balance}`);
}
showBalance('100');
showBalance(500);


// union type - 02
let _id: number | string;
console.log(_id = 200);
console.log(_id = 'HAO9000');


// union types condicionais
function showUserRole(role: boolean | string){
  if(typeof role === 'boolean'){
    return 'User not approved';
  }
  return `His profession is: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));


// alias type
type idTypes = number | string;
let id_: idTypes = '';
let productID: idTypes = 456;


// alias type - 01
type Id = number | string
function showId(id: Id){
  console.log(`ID: ${id}`);
}
showId(624);
showId('rx-375');


// alias type - 02
type cafeOUcha =  'café' | 'chá';
let bebida: cafeOUcha = 'café';
console.log('Café ou Chá? ' + bebida);


// enum type
enum Size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande',
}

const shirt = {
  name: 'Camisa gola V',
  size: Size.M
}


// enum type
enum transporte{'carro', 'moto'}
console.log(transporte);


// functions string
function greeting(namePerson: string): string{
  return `function - string: ${namePerson}`
}
console.log(greeting('Asuna'));


// functions param type
function sum(n1: number, n2: number){
  return n1 + n2;
}


// functions return type
function sum_(n1: number, n2: number): number{
  return n1 + n2;
}


// function - number
function multiplication(numero1: number, numero2: number): number{
  return numero1 * numero2;
}
console.log('function - number: ' + multiplication(10, 15));


// function void
function semRetorno(): void{
  console.log('function - void');
}
semRetorno();

// function param optional
function greeting_(greet: string, name?: string){
  if(name){
    return `${greet} ${name}`;
  } else {
    return `${greet}`;
  }
}

greeting_('Hello srº', 'Diogo');
greeting_('Hello srº ?');


// propriedades opcionais
function showNumber(x: number, y: number, z?: number): void{
  console.log('X: ' + x);
  console.log('Y: ' + y);
  
  if(z){
    console.log('Z: ' + z);
  }
}
console.log(showNumber(2, 7, 5));
console.log(showNumber(2, 7));


// propriedades opcionais
function teste(a: string, b: number, c: string, d?: number){
  console.log(a, b, c, d);
  console.log(a, c);
  console.log(b, c);
}
teste('Um', 2, 'três', 4);


// argumento opcional
function advanceGreeting(firstName: string, surName?: string): string{
  if(surName !== undefined){
    return `Hi ${firstName} ${surName}, welcome!`;
  }
  return `Hi ${firstName}, welcome!`;
}
console.log(advanceGreeting('Asuna'));
console.log(advanceGreeting('Asuna Yuuki'));


// interface
interface IMathFunctionParams{
  n1: number;
  n2: number;
}

function sumNumbers(nums: IMathFunctionParams){
  return nums.n1 + nums.n2;
}

function multiplyNumbers(nums: IMathFunctionParams){
  return nums.n1 * nums.n2;
}


interface IProduct {
  name: string;
  price: number;
  isAvailable: boolean
}

function showProductDetails(product: IProduct){
  console.log(`Product: ${product.name} U$: ${product.price}`);
  
  if(product.isAvailable){
    console.log('Product in stock');
  }
}

const shoes: IProduct = {
  name: 'Shirt Iron Man Mrk42',
  price: 19.99,
  isAvailable: true
}

showProductDetails(shoes);


// interface - permite ser incrementada
interface Points{
  x: number,
  y: number,
  z: number
}
function showCoords(obj: Points){
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj: Points = {
  x: 10,
  y: 15,
  z: 25
}
showCoords(coordObj);


// narrowing - checked types
function doSomething(info: number | string){
  if(typeof info === 'number'){
    console.log(`Value is: ${info}`);
    return;
  } else {
    console.log(`Phrase is: ${info}`);
  }
}

doSomething(177);
doSomething('Jhon');


// narrowing - type guard
type TValues = string | number;

function calcSum(n1: TValues, n2: TValues){
  if(typeof n1 === 'string' && typeof n2 === 'string'){
    n1 = Number(n1);
    n2 = Number(n2);
    return n1 + n2;
    
  } else if(typeof n1 === 'number' && typeof n2 === 'number'){
    return n1 + n2;
    
  } else {
    return `Don't possible calculate sum. Verify dates and try again later!`;
  }
}

calcSum('44', '99');
calcSum(12, 9);


// generics
function showArraysItems<T>(arrs: T[]){
  arrs.forEach((arr) => {
    console.log(`Item: ${arr}`);
  });
}

let item1 = [2, 7, 4];
let item2 = ['Item 1', 'Item 2', 'Item 3'];


// decorators
// *need to uncomment option: 'experimentalDecorators' in tsconfig.json
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T){
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@BaseParameters()
class Person {
  name;

  constructor(name: string){
    this.name = name;
  }
}

const sam = new Person('Sam');


// non-null assertion operator
let p = document.querySelector('.some-p');
console.log(p!.innerHTML);

// non-null assertion operator
let nameInput = document.querySelector('#name') as HTMLInputElement;
console.log(nameInput.value);

// non-null assertion operator
const yearFooter = document.querySelector('[data-js="yearFooter"]') as HTMLSpanElement;
console.log(yearFooter!.innerText);