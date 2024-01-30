/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Jennifer Ebere",
  photo: "images/myprofileimage.png",
  favoriteFoods: [
    "Rice and Chicken",
    "Bread and Egg",
    "Turkey and Chivita",
    "Plantain and Egg",
  ],
  hobbies: ["Watching movies", "Travelling", "Playing games"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Lagos, NG",
  length: "22 years",
});

myProfile.placesLived.push({
  place: "Abeokuta, ABK",
  length: "4 years",
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
  let placesLivedPlace = document.createElement("dt");
  placesLivedPlace.textContent = placeLived.place;

  let placesLivedLength = document.createElement("dd");
  placesLivedLength.textContent = placeLived.length;

  document.querySelector("#places-lived").appendChild(placesLivedPlace);
  document.querySelector("#places-lived").appendChild(placesLivedLength);
});
