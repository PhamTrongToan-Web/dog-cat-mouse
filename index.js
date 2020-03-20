var Dog = require('./dog');
var Cat = require('./cat');

var myDog = new Dog('chihuahua', 'cafe', 'bobby');
var tom = new Cat();

myDog.eat(tom);

// console.log(myDog);
console.log(myDog, tom);