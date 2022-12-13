const planets = document.querySelectorAll(".planets-array div");
const planetOnTheCard = document.querySelector(".weather__planetImage");

let isPlanetClicked = false;
let clickedPlanetIndex = 0;

document.querySelector("footer").style.visibility = "hidden";

for (let i = 0; i < planets.length; i++) {
  planets[i].addEventListener("click", function () {
    isPlanetClicked = true;
    clickedPlanetIndex = i;
    const planetSource = planets[i].querySelector("div>img").src;
    document.querySelector("footer").style.visibility = "visible";
    planetOnTheCard.src = planetSource;
    console.log(planetSource);
  });
}
