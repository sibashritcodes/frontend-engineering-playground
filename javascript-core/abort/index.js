function wait(ms, signal) {
  return new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
      resolve("Delay Passes");
    }, ms);
    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      reject("Aborted");
    });
  });
}

const controller = new AbortController();
wait(5000, controller.signal).then(console.log).catch(console.log);
setTimeout(() => {
  controller.abort();
}, 1000);
