function cancelablePromise(incomingPromise) {
  let isCanceled = false;
  let promise = new Promise((resolve, reject) => {
    incomingPromise()
      .then((value) => {
        if (isCanceled) {
          reject("Promise is rejected");
        } else {
          resolve(value);
        }
      })
      .catch((error) => {
        if (isCanceled) {
          reject("Promise is rejected");
        } else {
          reject(error);
        }
      });
  });
  return {
    promise,
    cancel: () => {
      isCanceled = true;
    },
  };
}

let p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1000);
    }, 5000);
  });
const { promise, cancel } = cancelablePromise(p1);
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

setTimeout(() => {
  cancel();
}, 2000);
