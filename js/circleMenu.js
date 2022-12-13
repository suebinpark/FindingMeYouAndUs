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
