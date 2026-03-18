function* simple() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simple();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* counter(start) {
  let n = start;
  while (true) {
    yield n;
    n++;
  }
}

const c = counter(1);
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());

function* conversation() {
    
}