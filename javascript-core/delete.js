function memoize(fn) {
  const map = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (map.has(key)) {
      return map.get(key);
    }
    const result = fn.apply(this, args);
    map.set(key, result);
    return result;
  };
}

Function.prototype.myBind = function (context, ...args1) {
  const _context = context ? Object(context) : globalThis;
  const fn = this;
  return function (...args2) {
    const key = Symbol();
    _context[key] = fn;
    const result = _context[key](...args1, ...args2);
    delete _context[key];
    return result;
  };
};

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, ...args);
    }, delay);
  };
}

function throttle(fn, interval) {
  let lastRun = 0;
  return function (...args) {
    const context = this;
    const now = Date.now();
    if (now - lastRun > interval) {
      fn.apply(context, args);
      lastRun = now;
    }
  };
}
