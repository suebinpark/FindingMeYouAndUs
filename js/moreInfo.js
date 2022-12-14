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
  if (
    sessionStorage.getItem("selectedPlanet") == "7" ||
    sessionStorage.getItem("selectedPlanet") == "8"
  ) {
    document.querySelector(".more__land").src = "img/land2.png";
  }
  let PlanetInStorage =
    planetsForMenu[parseInt(sessionStorage.getItem("selectedPlanet"))];
  document.querySelector(".more__planet").src = PlanetInStorage;
}

const moreTitle = document.querySelector(".more__title");
if (sessionStorage.getItem("planetName") != null) {
  moreTitle.innerText = sessionStorage.getItem("planetName");
  document.querySelector(
    ".background3"
  ).style = `background:radial-gradient(${sessionStorage.getItem(
    "color1"
  )}, ${sessionStorage.getItem("color2")});`;
  moreTitle.style = `background: radial-gradient(${sessionStorage.getItem(
    "color1"
  )}, ${sessionStorage.getItem(
    "color2"
  )}); -webkit-background-clip: text; -webkit-text-fill-color: transparent;-webkit-text-stroke: 0.2vw var(--light-clr);`;
} else {
  moreTitle.innerText = "Name your planet.";
  moreTitle.style =
    "color: rgba(255, 255, 255, 0);-webkit-text-stroke: 0.2vw var(--main-txt-clr);";
}
