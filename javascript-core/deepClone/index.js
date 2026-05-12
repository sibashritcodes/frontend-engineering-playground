/**
 * Deepclone is targeting Primitives, objects, arrays
 */

function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  } else if (value !== null && typeof value !== "object") {
    return value;
  } else if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  } else if (Object.getPrototypeOf(value) === Object.prototype) {
    const clone = {};
    for (let key in value) {
      clone[key] = deepClone(value[key]);
    }
    return clone;
  } else {
    return value;
  }
}
const original = { a: { b: 2 } };
const copy = deepClone(original);
copy.a.b = 3;
console.log(original, copy);
