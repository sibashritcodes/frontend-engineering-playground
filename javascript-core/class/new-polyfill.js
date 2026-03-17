function Animal(name) {
    this.name = name
}

Animal.prototype.speak = function() {
    console.log('Animal speaks');
}

function Dog(name, legs) {
    Animal.call(this, name);
    this.legs = legs;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log('Dog Speaks');
}

function new_operator(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  const result = constructor.apply(obj, args);
  return result instanceof Object ? result : obj;
}

const result = new_operator(Dog, 'Rex',4);
result.speak();
console.log(result);
