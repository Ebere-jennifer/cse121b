/* W05: Programming Tasks */

/* Declare and initialize global variables */
// Declare a const variable named templesElement
const templesElement = document.getElementById("temples");

// Declare a global empty array variable to store a list of temples named templeList
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    // Create HTML <article> element
    const articleElement = document.createElement("article");

    // Create HTML <h3> element and set its text content to templeName
    const h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;

    // Create HTML <img> element and set its src and alt attributes
    const imgElement = document.createElement("img");
    imgElement.setAttribute(`src`, temple.imageUrl);
    imgElement.setAttribute(`alt`, temple.location);

    // Append <h3> and <img> elements to <article> element
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);

    // Append <article> element to the main container (templesElement)
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  // Convert the fetch response to a JavaScript object (.json())
  const data = await response.json();
  // Assign the result to the templeList global array variable
  templeList.push(...data);
  // Call the displayTemples function and pass the list of temples
  displayTemples(templeList);
};

/* reset Function */
// Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () => {
  templesElement.innerHTML = ""; // Clear all content inside the div
};

/* filterTemples Function */
// Declare a function expression named filterTemples, the function should accept a argument in a parameter named temples.
const filterTemples = (temples) => {
  // Call the reset function to clear the output
  reset();

  // Obtain the value of the HTML element with the ID 'filtered'
  const filter = document.getElementById("filtered").value;

  // Use a switch statement with the filter value
  switch (filter) {
    case "utah":
      // Filter for temples where the location contains "Utah" as a string
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      // Filter for temples where the location does not contain "Utah" as a string
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      // Filter for temples where the dedicated date is before 1950
      let date = new Date(1950, 0, 1);
      displayTemples(
        temples.filter(
          (temple) =>
            new Date(temple.dedicated.split(", ")[0]) < date.getFullYear()
        )
      );
      break;
    case "all":
      // No filter, just use temples as the argument
      displayTemples(temples);
      break;
    default:
      console.error("Invalid filter value");
  }
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList); // Pass templeList as an argument
});
