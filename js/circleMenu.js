const startYourJourney = ["Start your journey."];

circleAstronaut = document.querySelector(".circles-button:nth-child(1)");
circlePlanet = document.querySelector(".circles-button:nth-child(2)");
circleMore = document.querySelector(".circles-button:nth-child(3)");
circleNumber = document.querySelector(".circles-button__number");

//default
menuTitle = document.querySelector(".background2__welcome-title");

//hover animation
circleAstronaut.addEventListener("mouseover", function () {
  menuTitle.innerText = "Who?";
  circleAstronaut.style.visibility = "visible";
  circlePlanet.style.visibility = "hidden";
  circleMore.style.visibility = "hidden";
  menuTitle.style.fontSize = "13vw";
});
circlePlanet.addEventListener("mouseover", function () {
  menuTitle.innerText = "Where?";
  circleAstronaut.style.visibility = "hidden";
  circlePlanet.style.visibility = "visible";
  circleMore.style.visibility = "hidden";
  menuTitle.style.fontSize = "13vw";
});
circleMore.addEventListener("mouseover", function () {
  menuTitle.innerText = "More...";
  circleAstronaut.style.visibility = "hidden";
  circlePlanet.style.visibility = "hidden";
  circleMore.style.visibility = "visible";
  menuTitle.style.fontSize = "13vw";
});

circleAstronaut.addEventListener("mouseleave", function () {
  menuTitle.innerText = startYourJourney;
  circleAstronaut.style.visibility = "visible";
  circlePlanet.style.visibility = "visible";
  circleMore.style.visibility = "visible";
  menuTitle.style.fontSize = "18vw";
});
circlePlanet.addEventListener("mouseleave", function () {
  menuTitle.innerText = startYourJourney;
  circleAstronaut.style.visibility = "visible";
  circlePlanet.style.visibility = "visible";
  circleMore.style.visibility = "visible";
  menuTitle.style.fontSize = "18vw";
});
circleMore.addEventListener("mouseleave", function () {
  menuTitle.innerText = startYourJourney;
  circleAstronaut.style.visibility = "visible";
  circlePlanet.style.visibility = "visible";
  circleMore.style.visibility = "visible";
  menuTitle.style.fontSize = "18vw";
});
