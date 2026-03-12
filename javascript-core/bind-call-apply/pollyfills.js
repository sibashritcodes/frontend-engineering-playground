const user1 = {
  name: "John",
};

const user2 = {
  name: "Jenny",
};

const greeting = function (city, country) {
  console.log("Hello I am " + this.name + " from " + city + "," + country);
};

console.log("---------- CALL POLLYFILL ----------");

Function.prototype.myCall = function (context, ...args) {
  const _context = context ? Object(context) : globalThis;
  const key = Symbol();
  _context[key] = this;
  const result = _context[key](...args);
  delete _context[key];
  return result;
};

greeting.myCall(user1, "Berhampur", "Odisha");
greeting.myCall(5, "Berhampur", "Odisha");
greeting.myCall(null, "Berhampur", "Odisha");

console.log("---------- APPLY POLLYFILL ----------");

Function.prototype.myApply = function (context, args) {
  const _context = context == null ? globalThis : Object(context);
  const key = Symbol();
  _context[key] = this;
  const result = _context[key](...args);
  delete _context[key];
  return result;
};

greeting.myApply(user1, ["Berhampur", "Odisha"]);
greeting.myApply(5, ["Berhampur", "Odisha"]);
greeting.myApply(null, ["Berhampur", "Odisha"]);

console.log("---------- BIND POLLYFILL ----------");

Function.prototype.myBind = function (context, ...bindArgs) {
  const fn = this;
  return function (...args) {
    const _context = context == null ? globalThis : Object(context);
    const key = Symbol();
    _context[key] = fn;
    const result = _context[key](...bindArgs, ...args);
    delete _context[key];
    return result;
  };
};
const greetJohn = greeting.myBind(user1, "Berhampur", "India");
greetJohn();
