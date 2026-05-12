/**
 * Event Bus Implementation
 * 1. Subscribe to Events
 * 2. Emit events
 * 3. Unsubscribe listener
 * 4. Mutiple listeners per event
 * 5. Pass data while emitting
 */

class EventBus {
  constructor() {
    this.events = {};
  }
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (listen) => listen !== callback,
      );
    };
  }
  emit(eventName, data) {
    const callbacks = this.events[eventName];
    if (callbacks && callbacks.length > 0) {
      callbacks.forEach((callback) => callback(data));
    }
  }
}

const bus = new EventBus();
const fn = (data) => {
  console.log("Login using fn with ", data);
};
const fn1 = (data) => {
  console.log("Login using fn1 with ", data);
};
const unsubscribe1 = bus.subscribe("login", fn);
const unsubscribe2 = bus.subscribe("login", fn1);
bus.emit("login", "sibashrit");

unsubscribe1();
bus.emit("login", "Pattnaik");
