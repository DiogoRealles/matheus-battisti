// generic with function
function showProductName<T extends {name: string}>(obj: T){
  return `Product: ${obj.name}`;
}
const objProduct = {name: 'controller', color: 'white'};
console.log(showProductName(objProduct));

// generic with interface
interface IObj<T, U> {
  name: string,
  wheels: T,
  engine: U
}
type Car = IObj<number, number>
type Pen = IObj<boolean, boolean>

const myCar: Car = {
  name: 'Ferrari',
  wheels: 4,
  engine: 2.0
}
const myPen: Pen = {
  name: 'Ferrari',
  wheels: false,
  engine: false
}
console.log(myCar);
console.log(myPen);


// type parameters
function getSomeKey<T , K extends keyof T>(obj: T, key: K){
  return `Key: ${key} - Value: ${obj[key]}`;
}
const server = {
  hd: '2TB',
  ram: '32GB'
}
console.log(getSomeKey(server, 'ram'));


// keyof type - cria um novo tipo baseado na key do objeto (Obj/Array) passado como parameto
type Character = {
  name: string,
  age: number,
  hasDriveLicense: boolean
}
type C = keyof Character;
function showCharName(obj: Character, key: C): string{
  return `${obj[key]}`;
}
const myChar: Character = {
  name: 'SomeName',
  age: 24,
  hasDriveLicense: true
}
console.log(showCharName(myChar, 'name'));


// typeof type - utiliza o tipo de outra variável para tipar a primeira
const userName: string = 'SomeName';
const userName2: typeof userName = 'SomeName';
console.log(userName, userName2);


// indexed access type
type Truck = {
  km: number,
  kg: number,
  description: string
}
type Km = Truck['km'];
const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Truck less weight'
}
function showKm(km: Km){
  console.log(`Km roaded: ${km}`);
}
showKm(newTruck.km);
console.log(showKm(9000));


// conditional type
interface A{}
interface B extends A{}
interface Test{
  showSomething(): string
}
type myType = B extends A ? number : string;
const someVar: myType = 5;
type myTypeB = Test extends {showMyNane(): number} ? string : boolean;


// template literals type
type testA = "text";
type CustomType = `some ${testA}`;
const testing: CustomType = 'some text';
type a1 = 'testing';
type a2 = 'union';
type a3 = `${a1}` | `${a2}`;
