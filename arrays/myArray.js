let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.filter(function (num) {
  if (num % 2 === 0) return true
}
)

myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value)
  }
})