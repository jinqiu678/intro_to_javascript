function multiply(num_1, num_2) {
  return num_1 * num_2
};

function getNumber(text_prompt) {
  let rlSync = require('readline-sync')
  return Number(rlSync.question(text_prompt))
};

first_number = getNumber("Enter the first number: ");
second_number = getNumber("Enter the second number: ");
console.log(`${first_number} * ${second_number} = ${multiply(first_number, second_number)}`)xw