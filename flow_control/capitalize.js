function toCapsGreater10(stringValue) {
  return stringValue.length > 10 ? stringValue.toUpperCase() : stringValue
}

test_1 = toCapsGreater10('aaaaa')
console.log(test_1)

test_2 = toCapsGreater10('aaaafdffffdfdfdaa')
console.log(test_2)