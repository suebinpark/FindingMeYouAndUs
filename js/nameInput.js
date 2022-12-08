const userNameForm = document.querySelector("#type-name");
const userNameInput = document.querySelector(".type-name__input");
const userNameShow = document.querySelector(".user-info__name");
const submitButton = document.querySelector(".type-name__submit");
const astronautText = document.querySelector("#astronaut");
const userDetails = document.querySelector(".type-detail__input");

function UserNameSubmit() {
  const userName = userNameInput.value;
  localStorage.setItem("username", userName);
}
function newFormAppears() {
  userDetails.style.display = "block";
  submitButton.style.display = "none";
}

function ShowUserName() {
  userNameShow.innerText = `Nice to meet you, ${localStorage.getItem(
    "username"
  )}!`;
}
function changeAstronautText() {
  astronautText.title = `Who is ${localStorage.getItem("username")}?`;
}
userNameForm.addEventListener("submit", UserNameSubmit);
userNameForm.addEventListener("submit", newFormAppears);
ShowUserName();
changeAstronautText();
newFormAppears();
