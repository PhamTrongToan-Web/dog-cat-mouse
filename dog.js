var chalk = require('chalk');
function Dog(type, color,name){
    this.name = name;
    this.type = type;
    this.color = color;
    this.stomach = [];
}

Dog.prototype.eat = function(food){
    this.stomach.push(food);
}
Dog.prototype.sayHi = function(){
    console.log('Hi my name is ' + chalk.blue(this.name));
}
module.exports = Dog;