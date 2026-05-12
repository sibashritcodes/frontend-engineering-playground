function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = new Array(promises.length);
    let resolvedPromiseCount = 0;
    promises.forEach((promise, index) => {
      promise()
        .then((value) => {
          result[index] = value;
          resolvedPromiseCount++;
          if (resolvedPromiseCount === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

const p1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("P1 is success");
    }, 1000);
  });

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P2 is success");
    }, 10000);
  });

myPromiseAll([p1, p2]).then(console.log).catch(console.log);
