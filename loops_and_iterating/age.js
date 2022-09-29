/* 
let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));
console.log(`You are ${} years old`);

console.log(`in 10 years, you will be ${ + 10}`);
console.log(`in 20 years, you will be ${ + 20}`);
console.log(`in 30 years, you will be ${ + 30}`);
console.log(`in 40 years, you will be ${ + 40}`);
*/

let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));
decades = 10

for (let index = 0; index < 4; index++) {
  console.log(`in ${decades} years, you will be ${age + decades}`)
  decades += 10
}