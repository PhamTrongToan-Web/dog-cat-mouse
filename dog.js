function Dog(){
    this.stomach = [];
}

Dog.prototype.eat = function(food){
    this.stomach.push(food);
}

module.exports = Dog;