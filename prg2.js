//stimulate DOM- like event handling in Node.js using events 
//add eventlistener - on()
//dispatchEvent -.emit()
import EventEmitter from 'events';
const eventEmitter = new EventEmitter();

emitter.on("click", (name) => {
    console.log(`click event is triggered for ${name}`);
});

emitter.on("mouseover", (name) => {
    console.log(`mouseover event is triggered for ${name}`);
});
emitter.emit('click', 'Rajnish')
emitter.emit('mouseover', 'Rajnish')
 