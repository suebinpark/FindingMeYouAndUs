const planets = document.querySelectorAll(".planets-array .planet");
const planetOnTheCard = document.querySelector(".weather__planetImage");
const savePlanet = document.querySelector(".planet__submit");

document.querySelector("footer").style.visibility = "hidden";
for (let i = 0; i < planets.length; i++) {
  planets[i].addEventListener(
    "click",
    function () {
      let selectedPlanet = document.querySelector(".selected");
      if (selectedPlanet) {
        selectedPlanet.classList.remove("selected");
      }
      this.classList.add("selected");
      sessionStorage.setItem("selectedPlanet", i);
    },
    0
  );
}
function showPlanetImage() {
  let planetSource =
    planets[sessionStorage.getItem("selectedPlanet")].querySelector("img").src;
  planetOnTheCard.src = planetSource;
  if (sessionStorage.getItem("selectedPlanet")) {
    document.querySelector("footer").style.visibility = "visible";
  }
}

savePlanet.addEventListener("click", showPlanetImage);
showPlanetImage();
