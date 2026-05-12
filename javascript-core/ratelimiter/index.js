async function limitConcurrency(tasks, limit) {
  const workers = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const currentIdex = index;
      index++;
      const result = await tasks[currentIdex]();
      console.log(result);
    }
  }

  for (let i = 0; i < limit; i++) {
    workers.push(worker());
  }
  await Promise.all(workers);
}

const tasks = Array.from({ length: 5 }, (_, i) => {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Task ${i + 1}`);
      }, 2000);
    });
});

limitConcurrency(tasks, 2);
