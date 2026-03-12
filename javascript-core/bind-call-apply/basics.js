const user1 = {
  name: "John",
};

const user2 = {
  name: "Jenny",
};

const greeting = function (city, country) {
  console.log("Hello I am " + this.name + " from " + city + "," + country);
};

console.log("---------- CALL ----------");

greeting.call(user1, "Chicago", "USA");
greeting.call(user2, "Toronto", "Canada");

console.log("---------- BIND ----------");

const greetJohn = greeting.bind(user1);
greetJohn("Chicago", "USA");
const greetJenny = greeting.bind(user2);
greetJenny("Toronto", "Canada");

console.log("---------- APPLY ----------");
  
greeting.apply(user1, ["Bangalore", "India"]);
greeting.apply(user2, ["Hyderabad", "India"]);
