function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    console.log(key);
    if (key in cache) {
      console.log("From Cache");
      return cache[key];
    }
    console.log("First time calculation happeing...");
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const wm = new WeakMap();
wm.set(5, 5);
console.log(wm);

const expensiveCalculation = memoize((n) => n * n);

console.log(expensiveCalculation(4));
console.log(expensiveCalculation(6));
console.log(expensiveCalculation(4));
