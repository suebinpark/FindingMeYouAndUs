circleAstronaut = document.querySelector(".circles-button:nth-child(1)");
circlePlanet = document.querySelector(".circles-button:nth-child(2)");
circleMore = document.querySelector(".circles-button:nth-child(3)");
menuTitle = document.querySelector(".background2__welcome-title");

circleAstronaut.addEventListener("mouseover", function () {
  menuTitle.innerText = "Who?";
});
circlePlanet.addEventListener("mouseover", function () {
  menuTitle.innerText = "Where?";
});
circleMore.addEventListener("mouseover", function () {
  menuTitle.innerText = "More...";
});

circleAstronaut.addEventListener("mouseout", function () {
  menuTitle.innerText = "";
});
circlePlanet.addEventListener("mouseout", function () {
  menuTitle.innerText = "";
});
circleMore.addEventListener("mouseout", function () {
  menuTitle.innerText = "";
});
