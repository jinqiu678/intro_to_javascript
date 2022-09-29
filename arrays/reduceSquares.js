let array = [3, 5, 7];
// array.reduce((accumulator, element) => accumulator + element * element, 0);
function sumOfSquares(array) {
  return array.reduce((accumulator, element) => accumulator + element * element, 0);
}
// checking solution
console.log(sumOfSquares(array)); // => 83
