// var t = 0;
// var timer = setInterval( function() {
//   t += 2;
//   console.log('TimeOut! ',t);
//   if(t>6) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log("Abc");
// console.log(__dirname); //returns path of current folder where we stand from the root directory
// console.log(__filename); //returns path of current file where we stand from the root directory

// function hi() {
//   console.log("Hello World");
// }
// hi();

// let bye = function() {
//   console.log('bye');
// };

// // bye();

// function callFunc(fun) {
//   fun();
// }
// callFunc(bye);

let stuff = require('./count'); // stuff = module.exports object in the './count' file

console.log(stuff.counter([1,2,3,4,5]));
console.log(stuff.adder(1,2));
console.log(stuff.pi);
console.log(stuff.adder(stuff.pi,2));
