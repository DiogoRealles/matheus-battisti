// 1 - decorator
function MyDecorator(){
  console.log('Iniciando Decorator!');
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log('Executando Decorator...');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  }
}
class myClass{
  @MyDecorator()
  testing(){
    console.log('Terminando execução');
  }
}
const myObj = new myClass();
myObj.testing();


// 2 - multiplos decorators - executa quem está mais próximo do método
function a(){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log('Executed FN a...');
  }
};
function b(){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log('Executed FN b...');
  }
}
class MultipleDecorators{
  @a()
  @b()
  testing(){
    console.log('Finishin!');
  }
}
const multiple = new MultipleDecorators();
multiple.testing();


// class decorator
function classDec(constructor: Function){
  console.log(constructor);
  if(constructor.name === 'User'){
    console.log('Creting User...');
  }
}
@classDec
class User{
  name;
  constructor(name: string){
    this.name = name;
  }
}
const asuna = new User('Asuna');
console.log(asuna);


// method decorator - mostra se property está ativo ou nao
function enumerable(value: boolean){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.enumerable = value;
  }
}
class Machine{
  name;
  constructor(name: string){
    this.name = name;
  }
  @enumerable(false)
  showName(){
    console.log(this);
    return `Machine: ${this.name}`;
  }
}
const tractor = new Machine('Rpz-2000');
console.log(tractor);


// acessor decorator - aplicável para getter e setter
class Monster{
  name?;
  age?;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  @enumerable(true)
  get showName(){
    return `Name: ${this.name}`;
  }
  get showAge(){
    return `Age: ${this.age}`;
  }
}
const newMonster = new Monster('Charmander', 10);
console.log(newMonster);


// property decorator
function formatID(){
  return function(target: Object, propertyKey: string){
    let value: string;
    const getter = function(){
      return value;
    }
    const setter = function(newVal: string){
      value = newVal.padStart(5, '0');
    };
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}
class ID{
  @formatID()
  id;
  constructor(id: string){
    this.id = id;
  }
}
const newId = new ID('1');
console.log(newId.id);


// pratice real - createdAt, updatedAt
function createdDate(created: Function){
  created.prototype.createdAt = new Date();
}
@createdDate
class Book{
  id;
  createdAt?: Date;
  constructor(id: number){
    this.id = id;
  }
}
@createdDate
class Pen{
  id;
  createdAt?: Date;
  constructor(id: number){
    this.id = id;
  }
}
const newBook = new Book(12);
const newPen = new Pen(21);
console.log(newBook, newBook.createdAt);
console.log(newPen, newPen.createdAt);


// method decorator
function checkIfUserPosted(){
  return function(
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ){
    const childFunction = descriptor.value;
    descriptor.value = function(...args: any[]){
      if(args[1] === true){
        console.log('User already Posted!');
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    }
    return descriptor;
  };
}
class Post{
  alreadyPosted = false;
  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean){
    this.alreadyPosted = true;
    console.log(`Post: ${content}`);
  }
}
const newPost = new Post();
newPost.post('First Post:', newPost.alreadyPosted);
newPost.post('Second Post:', newPost.alreadyPosted);


// property decorator
function Max(limit: number){
  return function(target: Object, property: string){
    let value: string;
    const getter = function(){
      return value;
    }
    const setter = function(newVal: string){
      if(newVal.length > limit){
        console.log(`Value Max Character ${limit}!`);
      } else {
        value = newVal;
      }
    }
    Object.defineProperty(target, property, {
      get: getter,
      set: setter,
    });
  };
}
class Admin{
  @Max(10)
  username;
  constructor(username: string){
    this.username = username;
  }
}
let asunaYuuki = new Admin('Asuna Yuuki');
console.log(asunaYuuki);
let diogoRealles = new Admin('Asuna Yuuki');
console.log(diogoRealles);