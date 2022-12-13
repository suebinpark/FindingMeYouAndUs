const planetImages = [
  "beige.png",
  "extremeRed.png",
  "green.png",
  "grey.png",
  "purple.png",
  "red.png",
  "strange.png",
];
const randomPlanet =
  planetImages[Math.floor(Math.random() * planetImages.length)];

const planet = document.querySelector(".background__planet");
planet.src = `img/planets/${randomPlanet}`;

const welcomeText = document.querySelector(".background__welcome-title");

function interactiveSpace() {
  let value = window.scrollY;
  welcomeText.style.marginTop = value * 1.05 + "px";
  planet.style.marginLeft = value * 0.9 + "px";
  planet.style.marginTop = value * 0.55 + "px";
}

window.addEventListener("scroll", interactiveSpace);
