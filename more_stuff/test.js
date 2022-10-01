copiedObj = {}
function clone(obj) {
  // TODO
  for (i in obj) {
    if (typeof obj[i] != Object) {
      copiedObj[i] = obj[i]
    } else {
      copiedObj[i] = obj[i]
    }
  }
  
  return copiedObj
}

// test

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

