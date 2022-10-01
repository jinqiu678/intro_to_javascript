lst = [1, 6, 3, 2]
maxValue = 0

for (let i = 1; i < lst.length; i++) {
  if (lst[i] > lst[i-1]) {
    maxValue = lst[i]
  }
}

console.log(maxValue)