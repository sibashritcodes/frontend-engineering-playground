function debounce(func, waitTime) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, waitTime);
  };
}

function myFunction(name) {
  console.log("This is my name " + name);
}

const debouncedFunction = debounce(myFunction, 2000);

for (let i = 0; i < 10; i++) {
  debouncedFunction("sibashrit");
}
