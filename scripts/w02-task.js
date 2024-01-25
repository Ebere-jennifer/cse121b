/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jennifer Chikaodi Ebere";
const currentYear = new Date().getFullYear();
const profilePicture = "images/myprofileimage.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector(".myprofileimage");

/* Step 4 - Adding Content */
nameElement.innerHTML = fullName;

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `myprofileimage of ${fullName}`);
/* Step 5 - Array */

// Declare an array variable to hold your favorite foods
const favoriteFoods = [
  "Pizza",
  "Rice and Chicken",
  "Yam and Egg",
  "Meat-Pie",
  "Pizza",
  "Turkey",
  "Plantain and Egg",
];

// To display the favorite foods array in the HTML element with the id "food," you can use the textContent
// property of the foodElement.
foodElement.textContent = favoriteFoods.join(", ");

// Declare and instantiate a variable to hold another single favorite food item
const anotherFavoriteFood = "Golden Morn";

// Add the new favorite food to the array
favoriteFoods.push(anotherFavoriteFood);

// Update the content of the HTML element
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the first element from the array
favoriteFoods.shift();

// Update the content of the HTML element
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the last element from the array
favoriteFoods.pop();

// Update the content of the HTML element
foodElement.innerHTML += `<br>${favoriteFoods}`;
