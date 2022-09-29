let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i++) {
  for (let z = 0; z < myArray[i].length; z++) {
    if (myArray[i][z] % 2 === 0) {
      console.log(myArray[i][z])
    }
  }
}

myArray.forEach(function(value) {
  for (let i = 0; i < value.length; i++){
    if(value[i] % 2 === 0) {
      console.log(value[i])
    }
  }
}
)

myArray.forEach(function(value) {
  value.forEach(function(insideValue) {
    if (insideValue % 2 === 0) {
      console.log(insideValue)
    }
  })
})
