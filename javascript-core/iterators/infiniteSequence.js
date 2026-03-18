function sequence() {
  let count = 1;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return {
            value: count++,
            done: false,
          };
        },
      };
    },
  };
}

for (let count of sequence()) {
  if (count > 98) break;
  console.log(count);
}
