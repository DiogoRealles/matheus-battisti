// narrowring - 01 type guard
function sum(a: number | string, b: number | string){
  if(typeof a == 'string' && typeof b == 'string'){
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a == 'number' && typeof b == 'number'){
    console.log(a + b);
  } else {
    console.log('Verifique os dados e tente novamente!');
  }
}
sum('4', '59');
sum(83, 6);
sum('4', 59);


// narrowring - 02 check value
function operations(arr: number[], operation?: string | undefined){
  if(operation){
    
    if(operation === 'sum'){
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);

    } else if(operation == 'multiply'){
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply);

    }

  }else {
    console.log('Por favor, defina uma operação');
  }
}
operations([5, 8, 3], 'sum');
operations([5, 8, 3], 'multiply');
operations([5, 8, 3]);


// narrowring - 03 stanceof
class User {
  name
  constructor(name: string){
    this.name = name
  }
}

class SuperUser extends User{
  constructor(name: string){
    super(name)
  }
}

const diogo = new User('Diogo');
const asuna = new SuperUser('Asuna');

function userGreeting(user: User){
  if(user instanceof SuperUser){
    console.log(`Olá Sra ${user.name}, deseja ver os dados do sistema?`);
  } else if(user instanceof User){
    console.log(`Olá ${user.name}.`);
  }
}

userGreeting(diogo);
userGreeting(asuna);


// narrowring - 04 operador IN
class Dog {
  name
  breed

  constructor(name: string, breed?: string){
    this.name = name
    if(breed){
      this.breed = breed
    }
  }
}

const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');

function showDogDetails(dog: Dog){
  
  if('breed' in dog){
    console.log(`O cachorro é da raça: ${dog.breed}`);
  } else {
    console.log(`O cachorro é um SRD.`);
  }
}
showDogDetails(turca);
showDogDetails(bob);


// Tarefa narrowing
type Review = number | boolean;

function showUserReview(review: Review){

  if(!review){
    console.log('Você não avaliou o produto!');
    return;
  }
  console.log(`A nota que você deu foi: ${review}, obrigado!`);
}

showUserReview(false);
showUserReview(2);
showUserReview(5);


type rating = number | boolean

function review(rating?:rating){
  if(typeof rating === 'number'){
    if(rating < 6 && rating > 0){
      console.log(`Your note's ${rating} THKS! ;)`);
    } else {
      console.log('Please, choice note 1 to 5!');
    }
  } else{
    console.log(`Without note! :(`);
  }
}

review(-1); // Please, choice note 1 to 5!
review(0); // Please, choice note 1 to 5!
review(1); // Your note's 1 THKS! ;)
review(5); // Your note's 5 THKS! ;)
review(6); // Please, choice note 1 to 5!
review(); // Without note! :(
