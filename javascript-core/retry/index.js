/**
 * retry(fn, retries, delay);
 * fn returns a Promise
 * If the promise rejects, we should retry after a delay
 * retries count should be maintained, should not be more than retries
 * fn is promise
 * retry returns a promise
 */

function retry(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    function attemptRetry(fn, retries, delay) {
      fn()
        .then((value) => resolve(value))
        .catch((reason) => {
          console.log("Rejecting::", retries);
          if (retries === 0) {
            return reject(reason);
          }
          setTimeout(() => {
            return attemptRetry(fn, retries - 1, delay);
          }, delay);
        });
    }
    attemptRetry(fn, retries, delay);
  });
}

const promise1 = () => new Promise((resolve, reject) => reject("Gone case"));

retry(promise1, 3, 1000).catch((reason) => console.log(reason));
