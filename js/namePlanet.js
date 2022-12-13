const planetNameForm = document.querySelector(".weather__input");
const planetNameInput = document.querySelector(
  ".weather__input input:nth-child(1)"
);
const savePlanetName = document.querySelector(".weather__submit");

planetNameForm.addEventListener("submit", function () {
  if (planetNameInput.value != null) {
    const planetName = planetNameInput.value;
    sessionStorage.setItem("planetName", planetName);
  } else {
    alert("Your planet is waiting for a name.");
  }
});
function ShowPlanetName() {
  if (sessionStorage.getItem("planetName") != null) {
    document.querySelector(
      ".planet__name"
    ).innerText = `${sessionStorage.getItem("planetName")}`;
    planetNameInput.placeholder = sessionStorage.getItem("planetName");
  }
}

ShowPlanetName();
