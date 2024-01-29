// ACTIVITY 1

// The syntax looks very similar to forEach, but notice that it needs a variable to store the new array it will return.
// We also need to make sure that the callback function we provide returns a value...usually the modified version of the array
// element.
// 1. Declare an array with value = ['one', 'two', 'three']
// 2. Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example:
// "<li>one</li>"
// 3. Set our list of HTML strings into the myList list. (Hint...checkout the .join() method.)

let originalArray = ["one", "two", "three"];

let myList = originalArray.map(function (item) {
  return "<li>" + item + "</li>";
});

let resultHTML = myList.join("");

console.log(resultHTML);

// ACTIVITY 2

// 1. Declare an array with letter grades in it: ['A', 'B', 'A']
// 2. Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in
// 'A' it should return 4.
// 3. Use map and our conversion function to convert the array in step 1 to gpa points.

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// ACTIVITY 3

// reduce is useful when we need to compress an array into a single value. It is most often used when the array has at least one
// value that can be mathematically flattened.
// 1. Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
// 2. Using reduce calculate the GPA from the array of gpaPoints.
// Using reduce to calculate the GPA
const totalGPA = gpaPoints.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// Calculating the GPA by dividing the total GPA points by the number of grades
const gpa = totalGPA / gpaPoints.length;

console.log(gpa); // Output: 3.3333333333333335

// ACTIVITY 4

// filter is similar to map in that it returns a new array of elements. The elements in the calling array will be included in
// the new array if they pass a test that you include in the callback you pass in.

// 1. Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
// 2. Using filter keep only the fruits that are longer than 6 characters.
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const filteredFruits = fruits.filter(function (fruits) {
  return fruits.length < 6;
});

// ACTIVITY 5

// indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.

// 1. Declare an array with the following value: [12, 34, 21, 54]
// 2. Declare a luckNumber variable with the value 21;
// 3. Use indexOf to see if the luckyNumber is in the Array.
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

const isLuckyNumberInArray = numbers.indexOf(luckyNumber) !== -1;

console.log(isLuckyNumberInArray); // Output: true
