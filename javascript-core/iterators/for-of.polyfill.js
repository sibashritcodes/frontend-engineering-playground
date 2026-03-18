const forOfPollyfill = (iterable) => {
  const iterator = iterable[Symbol.iterator]();
  let result = iterator.next();
  while (!result.done) {
    console.log(result.value);
    result = iterator.next();
  }
};

forOfPollyfill([1, 2, 3, 40]);
