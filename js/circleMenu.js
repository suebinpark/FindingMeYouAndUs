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
  console.log(circlePlanet.style);
  // circleNumber.innerText = "1";
});
circlePlanet.addEventListener("mouseover", function () {
  menuTitle.innerText = "Where?";
  circleAstronaut.style.visibility = "hidden";
  circlePlanet.style.visibility = "visible";
  circleMore.style.visibility = "hidden";
  // circleNumber.innerText = "2";
});
circleMore.addEventListener("mouseover", function () {
  menuTitle.innerText = "More...";
  circleAstronaut.style.visibility = "hidden";
  circlePlanet.style.visibility = "hidden";
  circleMore.style.visibility = "visible";
  // circleNumber.innerText = "3";
});

circleAstronaut.addEventListener("mouseout", function () {
  menuTitle.innerText = startYourJourney;
  circleAstronaut.style.visibility = "visible";
  circlePlanet.style.visibility = "visible";
  circleMore.style.visibility = "visible";
});
circlePlanet.addEventListener("mouseout", function () {
  menuTitle.innerText = startYourJourney;
  circleAstronaut.style.visibility = "visible";
  circlePlanet.style.visibility = "visible";
  circleMore.style.visibility = "visible";
});
circleMore.addEventListener("mouseout", function () {
  menuTitle.innerText = startYourJourney;
  circleAstronaut.style.visibility = "visible";
  circlePlanet.style.visibility = "visible";
  circleMore.style.visibility = "visible";
});
