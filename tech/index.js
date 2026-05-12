class Calculate {
  constructor(value) {
    this.initalValue = value;
    this.output = this.initalValue;
    return this;
  }
  add(value) {
    this.output += value;
    return this;
  }
  mul(value) {
    this.output *= value;
    return this;
  }
  sub(value) {
    this.output -= value;
    return this;
  }
  value() {
    return this.output;
  }
}

const calc = new Calculate(2).add(3).mul(4).value();
console.log(calc);

const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((value, fn) => fn(value), x);
const composition = compose(add2, multiply3);
console.log(composition(2));

const obj = {
  data: [1, 2, 3],
  [Symbol.iterator]: function () {
    let i = 0;
    return {
      next: () => ({
        value: this.data[i],
        done: i++ > this.data.length,
      }),
    };
  },
};

for (const value of obj) {
  console.log(value);
}
