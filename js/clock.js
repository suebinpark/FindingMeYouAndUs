const earth = document.querySelector(".background__earth");

function changeEarth() {
  const currHour = new Date().getHours();
  if (currHour >= 7 && currHour < 18) {
    earth.src = `img/earth-day.png`;
    earth.title = `즐거운 하루 되세요.`;
  } else {
    earth.src = `img/earth-night.png`;
    earth.title = `즐거운 하루 보내셨나요?`;
  }
}

changeEarth();
setInterval(changeEarth);
