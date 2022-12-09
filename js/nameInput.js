const userNameForm = document.querySelector("#type-form");
const userNameInput = document.querySelector(".type-name__input");
const userBirthDateInput = document.querySelector(".type-date__input");
const userColors = document.querySelector(".type-color__input");
const userColorOne = document.querySelector(
  ".type-color__input input:nth-child(1)"
);
const userColorTwo = document.querySelector(
  ".type-color__input input:nth-child(2)"
);

const userNameShow = document.querySelector(".user-info__name");
const submitText = document.querySelector(".type__submit--button");
const submitButton = document.querySelector(".type__submit--icon");

function UserNameSubmit() {
  const userName = userNameInput.value;
  const birthDate = userBirthDateInput.value;
  const color1 = userColorOne.value;
  const color2 = userColorTwo.value;
  sessionStorage.setItem("username", userName);
  sessionStorage.setItem("birthdate", birthDate);
  sessionStorage.setItem("color1", color1);
  sessionStorage.setItem("color2", color2);
}
function ShowUserDetails() {
  userNameInput.placeholder = sessionStorage.getItem("username");
  userBirthDateInput.type = "text";
  userBirthDateInput.placeholder = sessionStorage.getItem("birthdate");
  userColorOne.value = sessionStorage.getItem("color1");
  userColorTwo.value = sessionStorage.getItem("color2");

  userNameInput.style.pointerEvents = "none";
  userBirthDateInput.style.pointerEvents = "none";
  userColors.style.pointerEvents = "none";
  submitText.style.pointerEvents = "none";

  userNameShow.innerText = `Nice to meet you, ${sessionStorage.getItem(
    "username"
  )}!`;
}
function ShowBackGroundColors() {
  const userInfoSection = document.querySelector("#user-info");
  userInfoSection.style = `background:radial-gradient(${sessionStorage.getItem(
    "color1"
  )},${sessionStorage.getItem("color2")})`;
}
userNameForm.addEventListener("submit", UserNameSubmit);
if (sessionStorage.getItem("username") != null) {
  ShowUserDetails();
}
ShowBackGroundColors();
