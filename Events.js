const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


myEmitter.on('WaterFull', () => {
  console.log('Please turn off motor!');
  setTimeout(()=>{
  console.log('Please turn off motor! Its is gentle reminder');

  },3000);
});

console.log("The script is running")

myEmitter.emit('WaterFull'); //event multiplus time we can you 
console.log("The script is still running")
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');