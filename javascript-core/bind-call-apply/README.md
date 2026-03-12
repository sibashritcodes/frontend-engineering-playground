# bind, call, apply in JavaScript

This project demonstrates how JavaScript functions can change their execution context using:

- call()
- apply()
- bind()

## Function Context

In JavaScript, `this` refers to the object that is executing the function.

Sometimes we want to manually control this value.

JavaScript provides three methods for this:

### call()

Invokes the function immediately and allows passing arguments individually.

example:

greet.call(user, "Bangalore", "India")

---

### apply()

Similar to call, but arguments are passed as an array.

example:

greet.apply(user, ["Bangalore", "India"])

---

### bind()

Returns a new function with `this` permanently bound.

example:

const greetUser = greet.bind(user)
greetUser()
