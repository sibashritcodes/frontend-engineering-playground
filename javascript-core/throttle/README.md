# Throttle in JavaScript

## 📌 Overview

Throttling is a technique used to **limit how often a function can execute within a specific time interval**.

It ensures that a function runs **at most once every given delay**, no matter how many times it is triggered.

This is useful when dealing with **high-frequency events**, such as:

- Scrolling
- Window resizing
- Mouse movement
- Button clicking

Instead of executing the function every time the event fires, **throttle ensures controlled execution at regular intervals**.

---

## 🧠 How Throttle Works

When a throttled function is called:

1. It checks when the function was last executed.
2. If enough time has passed since the last execution, the function runs.
3. If not, the call is ignored until the delay period passes.

This prevents the function from being executed too frequently.

### What happens?

If the user scrolls continuously, the function executes **only once every second**.

Example output:

```id="g3d3tq"
Scroll event triggered
Scroll event triggered
Scroll event triggered
```

Even if hundreds of scroll events occur, execution is controlled.

---

## 🧩 Real-World Example

Throttling is useful for **scroll-based UI updates**.

Example:

```javascript id="6l5yfs"
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Updating scroll position");
  }, 500),
);
```

This prevents heavy operations from running on **every scroll event**, improving performance.

---

## ⏱ Timeline Example

User scrolling rapidly:

```id="t5i7u9"
Scroll Events:  █ █ █ █ █ █ █ █ █ █ █ █
Time:           0ms 100ms 200ms 300ms 400ms ...
Throttle Delay: 1000ms
```

Execution:

```id="6nh6eq"
Function runs at:
0ms → 1000ms → 2000ms → 3000ms
```

Only one execution occurs per interval.

---

## 🔍 Difference Between Debounce and Throttle

| Feature   | Debounce                                | Throttle                     |
| --------- | --------------------------------------- | ---------------------------- |
| Execution | Runs after user stops triggering events | Runs at fixed time intervals |
| Best For  | Search inputs, API calls                | Scroll events, resize events |

---

## 💡 Key Benefits

- Prevents excessive function execution
- Improves performance during frequent events
- Reduces unnecessary calculations
- Helps maintain smooth UI updates
