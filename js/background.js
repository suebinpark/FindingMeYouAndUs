// Earth image changes by time
// earthImage = document.querySelector("#nav_bar-icon");
// //시간 체크 -> if 오후 6시 이후면 earth-night로 변환.

const stars = document.querySelector(".background__stars");
const planet = document.querySelector(".background__planet");
const welcomeText = document.querySelector(".background__welcome-title");
const welcomeBtn = document.querySelector(".background__welcome-button");

function interactiveSpace() {
  let value = window.scrollY;
  stars.style.left = value * 0.2 + "px";
  welcomeText.style.marginTop = value * 1.05 + "px";
}

window.addEventListener("scroll", interactiveSpace);
