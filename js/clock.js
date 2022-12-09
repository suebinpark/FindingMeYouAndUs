const earth = document.querySelector(".background__earth");
const welcomeTextEarth = document.querySelector(".background__welcome-title");

function changeEarth() {
  const currHour = new Date().getHours();
  if (currHour >= 6 && currHour < 18) {
    earth.src = `img/earth-day.png`;
    earth.title = `즐거운 하루 되세요.`;
  } else {
    earth.src = `img/earth-night.png`;
    earth.title = `즐거운 하루 보내셨나요?`;
  }
}

function interactiveEarth() {
  let value = window.scrollY;
  welcomeTextEarth.style.marginTop = value * 1.05 + "px";
  earth.style.marginLeft = value * 1.05 + "px";
  earth.style.marginTop = value * 0.5 + "px";
}

changeEarth();
setInterval(changeEarth);
window.addEventListener("scroll", interactiveEarth);
