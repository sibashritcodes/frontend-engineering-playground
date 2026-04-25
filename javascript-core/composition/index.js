const add2 = (x) => x + 2;

const multiply3 = (x) => x * 3;

const divideBy2 = (x) => x / 2;

const compose = function (...fns) {
  return function (x) {
    return fns.reduceRight((value, fn) => fn(value), x);
  };
};

const composeFunction = compose(add2, multiply3, divideBy2);
console.log(composeFunction(2));
