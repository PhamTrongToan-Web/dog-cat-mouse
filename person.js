function Person(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
    this.hungry = false;
}

Person.prototype.introduce = function(){
    console.log(this.name);
}

Person.prototype.workout = function(){
    this.hungry = true;
}
module.exports = Person;

