/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  // Function body: Return the sum of number1 and number2
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

// Function expression for subtraction
const subtract = function (number1, number2) {
  return number1 - number2;
};

// Function expression for handling subtraction and updating the result
const subtractNumbers = function () {
  // Get input values
  const number1 = parseFloat(document.getElementById("subtract1").value);
  const number2 = parseFloat(document.getElementById("subtract2").value);

  // Display the result
  document.getElementById("difference").value = subtract(number1, number2);
};

// Attach event listener to the button
document
  .getElementById("subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
  return number1 * number2;
};
const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);

  document.querySelector("#product").value = multiply(factor1, factor2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
  return number1 / number2;
};
const divideNumbers = () => {
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);

  document.querySelector("#quotient").value = divide(dividend, divisor);
};

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function () {
  // Step 1: Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
  const subtotal = document.getElementById("subtotal");
  const subtotalValue = parseFloat(subtotal.value) || 0; // Convert input to a numeric value, default to 0 if not a valid number

  // Step 2: Check if the membership checkbox has been checked by the user
  const member = document.getElementById("member");
  const isMemberChecked = member.checked;

  // Step 3: Apply a 20% discount if the membership checkbox is checked
  const discount = isMemberChecked ? 0.8 : 1;

  // Step 4: Calculate the total amount
  const getTotal = subtotalValue * discount;

  // Step 5: Output the total to the total span with two decimals using a template string
  const totalSpan = document.getElementById("total");
  totalSpan.textContent = "$" + getTotal.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(
  (number) => number % 2 === 1
);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(
  (number) => number % 2 === 0
);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce(
  (sum, number) => sum + number
);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(
  (number) => number * 2
);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray
  .map((number) => number * 2)
  .reduce((sum, number) => sum + number);
