// Activity 1 #
// Our doStuff function in the example above is a bit underwhelming...lets make it do more than just console log out. It
// should really display the data that we retrieved to the user in the browser. We need a list!

// 1. Add an element to our HTML to hold the pokemon data...something like <section id="output"></section>
// 2. Get that element with javascript. (document.querySelector)
// 3. In the doStuff function create a variable and build out the html that we want to display the information. (I recommend a
// template literal string)
// 4.Insert our HTML into the output element (innerHTML)

// Activity 2 #
// As interesting as Ditto is...it would be more fun to get information on lots of pokemon...if we make a slight change to the
// URL we are making the request to, we can get a list of pokemon instead of just one. Let's do that and then make a new function
// called doStuffList that will output the list.

// 1. Add a ul element to our html to hold the list. (<ul id="outputList"></ul>)
// 2. Get that element with Javascript
// 3. Add a new url that will return a list of pokemon instead of just one const urlList = "https://pokeapi.co/api/v2/pokemon";
// 4. Create two functions: function doStuffList(data) {} and function getPokemonList(url) {}
// 5. Write the code for getPokemonList first. It should do the following:
// a. Make a fetch request to the url passed in.
// b. When the request finishes check to make sure it was ok.
// c. If it was ok then convert the response to json.
// d. Call the doStuffList function, passing in the data.
// 6. Move to the doStuffList function next. In the function start by console.logging data. Save everything and open your
// file in the browser. Take a look in the console at the structure of what got sent back. Notice that our list is inside of a
// property called results
// 7. Create a variable called pokeList in the doStuffList function and set it equal to data.results
// 8 for each of the pokemon in the list: create a line of html to output it <li>${pokeList.name}</li>
// 9. Add the new list to what was already in our output element.
// 10.Run the new getPokemonList function, passing in urlList.

// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuff(data) {
  const outputElement = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    // note the += here...
    pokeListElement.innerHTML += html;
  });
}
getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);
