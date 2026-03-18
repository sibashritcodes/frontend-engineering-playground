const range = {
  start: 1,
  end: 12,
  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;
    return {
      next() {
        if (current <= end) {
          return {
            value: current++,
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

console.log(range);

for(const n of range) {
    console.log(n)
}
