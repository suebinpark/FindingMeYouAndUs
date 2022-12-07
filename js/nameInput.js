const userNameForm = document.querySelector("#type-name");
const userNameInput = document.querySelector(".type-name__input");
const userNameShow = document.querySelector(".user-info__name");
const astronautText = document.querySelector("#astronaut");

function UserNameSubmit() {
  const userName = userNameInput.value;
  localStorage.setItem("username", userName);
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
ShowUserName();
changeAstronautText();
