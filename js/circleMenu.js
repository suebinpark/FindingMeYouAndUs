// const circleAstronaut = $(".circles-button:nth-child(1)");
// const circlePlanet = $(".circles-button:nth-child(2)");
// const circleMore = $(".circles-button:nth-child(3)");
// const menuTitle = $(".background2__welcome-title");

// $(circleAstronaut).hover(
//   function () {
//     $(circleAstronaut).text("Who?");
//   },
//   function () {
//     $(circleAstronaut).text("");
//   }
// );

// $(circlePlanet).hover(
//   function () {
//     $(circlePlanet).text("Where?");
//   },
//   function () {
//     $(circlePlanet).text("");
//   }
// );

// $(circleMore).hover(
//   function () {
//     $(circleMore).text("More...");
//   },
//   function () {
//     $(circleMore).text("");
//   }
// );

const menuTitle = document.querySelector(".background2__welcome-title");
const menuTitleDescription = document.querySelector(
  ".background2__description"
);

function showDescription() {
  menuTitleDescription.style.visibility = "visible";
}
function MenuPageInDely() {
  setTimeout(function () {
    location.href = "menu.html";
  }, 4000);
}
menuTitle.addEventListener("click", showDescription);
menuTitle.addEventListener("click", MenuPageInDely);
