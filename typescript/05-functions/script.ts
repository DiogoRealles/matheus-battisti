// function callback
function greeting(name: string): string{
  return `Olá ${name}.`;
}

function preGreeting(fn: (name: string) => string, userName: string){
  const greet = fn(userName);
  console.log(greet);
}
preGreeting(greeting, 'Asuna');
preGreeting(greeting, 'Suguha');


// generics 1 - não se sabe o valor que será recebido nem a quantidade
function fisrtElement<T>(arr: T[]): T{
  return arr[0];
}
console.log(fisrtElement([7, 2, 9]));
console.log(fisrtElement(['A', 'b', 'c']));


// generics 2 - não se sabe o valor que será recebido nem a quantidade
function mergeObjs<U, T>(obj1: U, obj2: T){
  return {
    ...obj1,
    ...obj2
  }
}
const newObj = mergeObjs({name: 'Sinon'}, {age: 22, role: 'Actriz'});
console.log(newObj);


// constrains - delimita a quantidade e o tipo que será recebido
function biggestNumber<T extends number | string>(a: T, b: T): T{
  let biggest: T;
  if(+a > +b){
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}
console.log(biggestNumber(7, 2));
console.log(biggestNumber('3', '6'));


// specific - especifica na chamada da função quais tipos de argumentos aceitos
function mergeArrays<T>(arr1: T[], arr2: T[]){
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [9, 8, 7]));
console.log(mergeArrays<string | number>(['Asuna', 'Sinon', 'Diogo'], [24, 22, 32]));


// rest operator
function sumAllNum(...n: number[]){
  return n.reduce((number, sum) => {
    return sum + number;
  });
}
console.log(sumAllNum(5, 1, 7, 2));


// destructuring
function showProductDetails({name, price}: {name: string, price: number}){
  return `Product: ${name} - Price: R$ ${price}`;
}
const shirt = {name: 'shirt', price: 49.99}
console.log(showProductDetails(shirt));