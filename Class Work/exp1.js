const EventEmitter = require("events");

const emitter = new EventEmitter();

// greet event
emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// exit event
emitter.on("exit", () => {
    console.log("Exit event triggered.");
});

// Trigger events
emitter.emit("greet", "Rajnish");
emitter.emit("exit");