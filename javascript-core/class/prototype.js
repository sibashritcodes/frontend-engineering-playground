const animal = {
  name: 'Animal',
  eat() {
    console.log(`${this.name} is eating.`);
  },
  breathe() {
    console.log(`${this.name} is breathing.`);
  },
};

const dog = {
  bark() {
    console.log(`${this.name} is barking.`);
  },
};

const rex = {
  name: "rex",
};

Object.setPrototypeOf(rex, dog);
Object.setPrototypeOf(dog, animal);

rex.bark();
rex.eat();

console.log(dog.hasOwnProperty('name'));
