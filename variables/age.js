let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));
console.log(`You are ${age} years old`);

console.log(`in 10 years, you will be ${age + 10}`);
console.log(`in 20 years, you will be ${age + 20}`);
console.log(`in 30 years, you will be ${age + 30}`);
console.log(`in 40 years, you will be ${age + 40}`);