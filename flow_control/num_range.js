function num_range(num) {
  if (num >= 0 && num <= 50) {
    console.log('between 0 and 50')
  } else if (num >50 && num <= 100) {
    console.log('between 51 and 100')
  } else if (num > 100) {
    console.log('greater than 100')
  } else {
    console.log('less than 0')
  }
}

num_range(100)