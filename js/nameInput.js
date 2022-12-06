const userNameForm = document.querySelector("#type-name");
const userNameInput = document.querySelector(".type-name__input");
const userNameShow = document.querySelector(".user-info__name");

function UserNameSubmit() {
  const userName = userNameInput.value;
  localStorage.setItem("username", userName);
}

function ShowUserName() {
  userNameShow.innerText = `Nice to meet you, ${localStorage.getItem(
    "username"
  )}!`;
}

userNameForm.addEventListener("submit", UserNameSubmit);
ShowUserName();
