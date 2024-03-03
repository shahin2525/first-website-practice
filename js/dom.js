const placeName = document.getElementsByClassName("Place-name");
const placeTitle = document.getElementById("place");
placeTitle.innerText = "place item 2";

const fruitsTitle = document.querySelector("#fruits-title");
fruitsTitle.innerText = "fruits title 2";
const fruitsName = document.querySelectorAll(".fruit-name");
for (const fruitName of fruitsName) {
  console.log(fruitName.innerText);
}
console.log(fruitsName);
