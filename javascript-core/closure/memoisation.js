function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Coming from cache");
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

const expensiveCalculation = memoize((n) => n * n);

const expensiveCalculation2 = memoize((n) => ({
  ...n,
  a: 1,
}));

console.log(expensiveCalculation(4));
console.log(expensiveCalculation(6));
console.log(expensiveCalculation(4));

console.log(expensiveCalculation2({ b: 1 }));
console.log(expensiveCalculation2({ c: 1 }));
console.log(expensiveCalculation2({ b: 1 }));
