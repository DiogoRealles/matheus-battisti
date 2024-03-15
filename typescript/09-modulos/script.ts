import importGreeting from "./greeting";
import { primary } from './variables';
import {a, b, myFunction} from './multipleValues';
import {someName as name} from './changeName' ;
import * as infoPlayer from './numbers';
import {Human} from './myTypes';

importGreeting();
console.log(primary);
console.log(a);
console.log(b);
myFunction();
console.log(name);
console.log(infoPlayer.namePlayer);
console.log(infoPlayer.points);
console.log(infoPlayer.winner);

class User implements Human{
  name
  age
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const asuna = new User('Asuna Yuuki', 28);
const diogo = new User('Diogo Realles', 32)
