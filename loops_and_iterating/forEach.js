let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// Assigning function as a value
functionName = function(name) {
  console.log(name);
}

// Can also use anonymous funcion
names.forEach(functionName);

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// Using Arrow Function
names.forEach(name => console.log(name));

