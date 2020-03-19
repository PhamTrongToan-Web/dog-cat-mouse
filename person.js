function Person(name, age){
    this.name = age;
    this.age = age;
    this.hungry = false;
}

Person.prototype.introduce = function(){
    console.log(this.name);
}

Person.prototype.workout = function(){
    this.hungry = true;
}
module.exports = Person;

