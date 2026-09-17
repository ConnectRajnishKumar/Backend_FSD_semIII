// //Event 
// //EventEmitter- on(emit event param, callback)- register ever

// const EventEmitter = require('events');
// class MyEvents extends EventEmitter {

// }
// const event = new MyEvents();





// event.on("greet", (name) => {
//     console.log(`Hello CSE24 my name is, ${name}!`); //template literal- ${variable}
// })


// event.on("exit", () => {})
// event.emit("greet", "Rajnish");
// event.emit("greet", "Rajnish");
// event.emit("greet", "Rajnish");  
// event.emit("exit");




const EventEmitter = require("events");

const button = new EventEmitter();

// Simulate click event
button.on("click", () => {
    console.log("Button was clicked!");
});

// Simulate mouseover event
button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

// Trigger events
button.emit("click");
button.emit("mouseover");