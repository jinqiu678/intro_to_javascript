/*function factorial(number) {
  initial = 1
  for (let counter = number; counter > 0; counter--) {
    console.log(counter)
    initial *= counter

  }
  return initial
}

console.log(factorial(8))
*/

function factorial(number) {
  if (number === 1) return number;
  return number * factorial(number - 1)
}

console.log(factorial(5))