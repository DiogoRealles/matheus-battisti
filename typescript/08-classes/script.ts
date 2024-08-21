// 1 - campos em class: sinal de ! indica que não vai iniciar com valores
class user{
  name!: string
  age!: number
}
const asuna = new user();
asuna.name = 'Asuna';
console.log(asuna);


// 2 - campos em class: iniciar com valores que serão passados na instância da classe
class NewUser{
  name
  age
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}
const diogo = new NewUser('Diogo', 32);
console.log(diogo);


// 3 - readonly carro já possui wheels inicado
class Car{
  name
  readonly wheels = 4

  constructor(name: string){
    this.name = name
  }
}
const ferrari = new Car('Ferrari');
console.log(ferrari);
ferrari.name = 'Ferrari enzo'
console.log(ferrari);


// 4 - herança e super
class Machine{
  name
  constructor(name: string){
    this.name = name
  }
}
const trator = new Machine('Trator Xpto-2000');
console.log(trator);
class KillerMachine extends Machine{
  guns  
  constructor(name: string, guns: number){
    super(name)
    this.guns = guns
  }
}
const extermnator = new KillerMachine('Exterminator', 2);
console.log(extermnator);


// 5 - métodos em classes 
class Dwarf{
  name
  constructor(name: string){
    this.name = name
  }
  greeting(){
    console.log('Hey stranger!');
  }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy);
jimmy.greeting();

// 6 - this serve para se referir oa próprio objeto instânciado
class Truck{
  model
  hp
  constructor(model: string, hp: number){
    this.model = model
    this.hp = hp
  }
  showDetails(){
    console.log(`Caminhão modelo: ${this.model} tem ${this.hp} cavalos`);
  }
}
const volvo = new Truck('Volvo', 500);
console.log(volvo);
volvo.showDetails();


// 7 - getters - métodos para acessar propriedades dentro do objeto, são usados como uma propriedade (não precisa invocar), podem acessar métodos privados
class Person{
  name
  surname
  constructor(name: string, surname: string){
    this.name = name
    this.surname = surname
  }
  // getters
  get fullname(){
    return `${this.name} ${this.surname}`;
  }
}
const asunaYuuki = new Person('Asuna', 'Yuuki');
console.log(asunaYuuki);
console.log(asunaYuuki.fullname);


// 8 - setters - métodos que modificam as propriedades
class Person2{
  name!: string
  age!: number
  set named(name: string){
    this.name = name
  }
  set yearOld(age: number){
    this.age = age;
  }
  get info(){
    return `${this.name} ${this.age}`
  }
}
const diogoRealles = new Person2();
diogoRealles.named = 'Diogo Realles';
diogoRealles.yearOld = 33;
console.log(diogoRealles);
console.log(diogoRealles.info);


// 9 - implements - trazem métodos e atributos de interfaces (obrigatório a implementação dos métodos e atributos)
interface showTitle{
  itemTitle(): string
}
class BlogPost implements showTitle{
  title
  constructor(title: string){
    this.title = title
  }
  itemTitle(): string{
    return this.title;
  }
}
const blog = new BlogPost('Title Post');
console.log(blog);
console.log(blog.itemTitle());


// 10 - override - sobrescreve métodos herdados, basta criar um método com mesmo nome na classe filha
class MotherPanda{
  invocation(){
    console.log('Vira um panda preto e branco gigante!');
  }
}
class DaugetherPanda extends MotherPanda{
  invocation(){
    console.log('Vira um panda vermelho gigante!');
  }
}
const pandaMother = new MotherPanda();
console.log(pandaMother);
console.log(pandaMother.invocation());
const pandaDaugether = new DaugetherPanda();
console.log(pandaDaugether);
console.log(pandaDaugether.invocation());
console.log('#AlertaDeSpoiler!');


// 11 - visibilidade - permite ou não subclasses editarem métodos e atributos herdados. possui 3 niveis public, protected e private
// # public - visivel por default, qualquer método ou propriedade da classe pai estará acessível na classe filha
class Father{
  public superPower = 'Kamehameha';
}
class Son extends Father{
}
const goku = new Father();
console.log(goku.superPower);
const gohan = new Son();
console.log(gohan.superPower);


// # protected - métodos e propriedades só podem ser utilizados em subclasses, métodos e propriedades só pode ser acessada por um método
class FatherCar{
  protected car = 'Ferrari';
}
class sonPirralho extends FatherCar{
  permition(){
    console.log(`Father I can catch your: ${this.car}?`);
  }
}
const carFather = new FatherCar();
console.log(carFather);
const pirralhoSon = new sonPirralho();
pirralhoSon.permition();


// # private - item private só podem ser acessados na classe que os definiu, e ainda precisam de métodos para serem acessados
class Password{
  private password = '@mudar123';
  showPassword(){
    return this.password;
  }
  private changePassword(){
    return this.password;
  }
}
class ManagerPasswords extends Password{
  showNewPassword(){
    // this.changingPassword(); // método privado, não pode ser acessado fora de quem declarou
  }
}
const newPassword = new Password();
console.log(newPassword.showPassword());
const changePassword = new ManagerPasswords();
console.log(changePassword.showPassword());


// 12 - static - métodos e propriedades statics de uma classe não dependem de instanciar objetos para ser acessados ou utilizados, podendo ser acessados apartir da propria classe
class StaticMembers{
  static prop = 'Prop static';
  static statiMethod(){
    console.log('Method Static');
  }
}
console.log(StaticMembers.prop);
StaticMembers.statiMethod();


// 13 - generics são classes com tipos generics, ou seja as propriedades dos argumentos podem ter os tipos definidos na hora da instância da classe
class Item<T, U>{
  first
  second
  constructor(firts: T, second: U){
    this.first = firts
    this.second = second
  }
}
const newItem = new Item('PlayStation', 1);
const newItem2 = new Item(2, 'Xbox');
console.log(newItem)
console.log(newItem2)


// 14 - parameters propeties permite definir a privacidade, nome e tipo das propriedades no constructor, resumindo a sintaxe das classes
class ParametersProperties{
  constructor(public name: string, private qty: number, private price: number){
    this.name = name;
    this.qty = qty;
    this.price = price;
  }
  get showQty(){
    return `Qty: ${this.qty}`;
  }
  get showPrice(){
    return `Price: ${this.price}`;
  }
}
const shirt = new ParametersProperties('shirt', 3, 19.99);
console.log(shirt);
console.log(shirt.name);
console.log(shirt.showQty);
console.log(shirt.showPrice);


// 15 - class expression - cria classes anônimas, podem ser utilizados generics, assim como arrow function devem ser colocadas em variável
const Pokemon = class<T>{
  name
  constructor(name: T){
    this.name = name
  }
}
const pikachu = new Pokemon('Pikachu');
console.log(pikachu);


// 16 - abstract class - serve como molde para outra classe, todos os seus métodos e propriedades também iniciam com abstract e devem ser implementados nas classes que a herdam, não pode instânciar objetos a partir dessa classe
abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExample extends AbstractClass{
  name: string
  constructor(name: string){
    super();
    this.name = name
  }
  showName(): void {
    console.log('Abstract Class!!!');
  }
}
const abstractTeste = new AbstractExample('Classe Abstrata');
console.log(abstractTeste.showName());


// 17 - relação entre classes - é possível criar um objeto com base em outra classe quando os atributos das classes são identicas.
class Dog{
  name!: string
}
class Cat{
  name!: string
}
const doguinho: Dog = new Cat();
doguinho.name = 'Bolinha';
console.log(doguinho);
console.log(doguinho.name);