# Debounce in JavaScript

## 📌 Overview

Debouncing is a technique used to **limit how often a function executes**.
It ensures that a function is only executed **after a certain delay has passed since the last time it was invoked**.

This is commonly used to improve performance in situations where a function might be called **very frequently**, such as:

- Search input fields
- Window resize events
- Scroll events
- API calls triggered by typing

Instead of running the function repeatedly, **debounce waits until the user stops triggering the event for a specified time**.

---

## 🧠 How Debounce Works

Every time the debounced function is called:

1. The previous timer is cleared.
2. A new timer is started.
3. The function executes **only after the delay completes without interruption**.

This ensures that **only the final action triggers the function**.
