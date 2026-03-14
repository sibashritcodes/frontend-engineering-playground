const counter  = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        get: () => count,
        reset: () => count = 0,
    }
})();

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.get());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());

