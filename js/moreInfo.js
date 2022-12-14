const planetsForMenu = [
  "img/planets/beige.png",
  "img/planets/extremeRed.png",
  "img/planets/green.png",
  "img/planets/grey.png",
  "img/planets/purple.png",
  "img/planets/red.png",
  "img/planets/strange.png",
  "img/earth-day.png",
  "img/earth-night.png",
];
if (sessionStorage.getItem("selectedPlanet") == null) {
  alert("You should explore ≪WHO≫ & ≪WHERE≫ pages first.");
  setTimeout(function () {
    window.location.replace("startJourney.html");
  }, 50);
} else {
  let PlanetInStorage =
    planetsForMenu[parseInt(sessionStorage.getItem("selectedPlanet"))];
  document.querySelector(".more__planet").src = PlanetInStorage;
}
