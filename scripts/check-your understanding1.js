// Given these function declarations:

function calculate(a, b, callback) {
  callback(a + b);
}

function displayResult(result) {
  calculate(2, 3, displayResult);
  console.log("The result is: " + result);
}
//Call a function named calculate and pass it the arguments to support the console output of the following equation: 2 + 3.

let person = {
  name: "Antonia Francesca",
  age: 30,
  profession: "Software Engineer",
  hobbies: ["reading", "playing guitar", "hiking"],
  address: {
    street: "123 Camino Real",
    city: "Santa Rosa",
    country: "Honduras",
  },
  isEmployed: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

// In this example, the person object has various properties such as name, age, profession, hobbies, address, and isEmployed.
// It also includes a greet method that logs a greeting message to the console using the person's name.

// The address property is an object itself, containing nested properties such as street, city, and country.

// You can access and modify the properties and invoke the methods of the person object using dot notation or bracket notation.
// For example:

console.log(person.hobbies[0]); // Output: reading
