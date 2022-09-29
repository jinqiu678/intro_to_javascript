let greetPeople = function (){
  console.log("Good Morning!");
};

greetPeople();


(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});