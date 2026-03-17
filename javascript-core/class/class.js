class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Animal ${this.name} speaks`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`Dog ${this.name} barks`);
  }
}

const rex = new Dog("Rex", "Labrador");
rex.speak();
rex.bark();

// Proof that class is just a syntatical sugar
console.log(typeof Dog); // It results in function
console.log(typeof rex.__proto__.bark); // It results in function
console.log(rex.hasOwnProperty("bark")); // It results in false
console.log(rex.hasOwnProperty("name")) // It results in true
