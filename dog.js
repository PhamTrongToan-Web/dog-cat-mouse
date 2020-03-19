function Dog(type, color){
    this.type = type;
    this.color = color;
    this.stomach = [];
}

Dog.prototype.eat = function(food){
    this.stomach.push(food);
}

module.exports = Dog;