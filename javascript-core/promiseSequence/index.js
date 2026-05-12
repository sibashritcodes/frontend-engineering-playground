function promiseSequence(promises) {
  return new Promise(async (resolve, reject) => {
    let result = new Array(promises.length);
    let resolvedPromiseCount = 0;
    for (let index = 0; index < promises.length; index++) {
      try {
        const value = await promises[index]();
        result[index] = value;
        resolvedPromiseCount++;
        if (resolvedPromiseCount === promises.length) {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }
  });
}

const p1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("P1 is success");
    }, 5000);
  });

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P2 is success");
    }, 5000);
  });

promiseSequence([p1, p2]).then(console.log).catch(console.log);
