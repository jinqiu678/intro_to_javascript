let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.map(value => value.length).filter(value => value % 2 !== 0)
}

// Checking Solution
console.log(oddLengths(arr)); // => [1, 5, 3]
