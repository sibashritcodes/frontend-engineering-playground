console.log("---------- CLOSURE ----------");

function outer() {
    const a = 5;
    return function inner() {
        const b = 6;
        return a+b;
    }
}

innerFunc = outer(); // outer function execution is done
innerFunc(); // Even though outer function execution is done, we still have access to a=5,
/**
 * The reason we have access to outer scope variable, even when the outer function execution is done, 
 * becasue of Closure. Every function object has an internal slot [[Environment]] that stores a reference 
 * to the lexical environment where the function was created. Lexical scoping can be classified as 
 * Block, Local, Closure, Global scope. 
 */
