// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, function(){
//     console.log("Hello all!");
// });
// emitter.on(eventName, function(){
//     console.log("Привет!");
// });
// emitter.emit(eventName);

//==========================================

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, function(data){
//     console.log(data);
// });
// emitter.emit(eventName, "Привет пир!");

//===========================================

// const util = require("util");
// const EventEmitter = require("events");
 
// function User(){
// }
// util.inherits(User, EventEmitter);
 
// let eventName = "greet";
// User.prototype.sayHi = function(data){
//     this.emit(eventName, data);
// }
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data);
// });
 
// user.sayHi("Мне нужна твоя одежда...");


const EventEmitter = require("events");
  
let eventName = "greet";
 
class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}
 
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});
  
user.sayHi("Мне нужна твоя одежда...");