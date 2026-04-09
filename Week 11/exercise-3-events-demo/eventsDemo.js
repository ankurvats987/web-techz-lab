const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// Multiple listeners for the same custom event.
eventEmitter.on("studentRegistered", (name, regNo) => {
  console.log(
    `Listener 1: Student registered -> Name: ${name}, Reg No: ${regNo}`,
  );
});

eventEmitter.on("studentRegistered", (name) => {
  console.log(`Listener 2: Welcome message sent to ${name}.`);
});

eventEmitter.on("labStarted", (labName) => {
  console.log(`Lab event: ${labName} has started.`);
});

console.log("Event demo started.");

// Synchronous event emission.
eventEmitter.emit("studentRegistered", "Rahul", "22BCE1234");

// Asynchronous event emission to demonstrate event-driven flow.
setTimeout(() => {
  eventEmitter.emit("labStarted", "Node.js Basics Lab");
}, 1000);

setTimeout(() => {
  eventEmitter.emit("studentRegistered", "Aisha", "22BCE5678");
}, 1500);
