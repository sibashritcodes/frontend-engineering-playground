function Throttle(func, waitTime) {
  let lastRan = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastRan >= waitTime) {
      func.apply(this, args);
      lastRan = now;
    }
  };
}

function myFunction(name) {
  console.log("This is my name ", name);
}

const throttledFunction = Throttle(myFunction, 2000);

setInterval(() => {
  throttledFunction("sibashrit");
}, 100);
