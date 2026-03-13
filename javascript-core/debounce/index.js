function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function myFunction(name) {
  console.log("This is my name " + name);
}

const debouncedFunction = debounce(myFunction, 2000);

for (let i = 0; i < 10; i++) {
  debouncedFunction("sibashrit");
}
