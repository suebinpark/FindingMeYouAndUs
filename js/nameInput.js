const userNameForm = document.querySelector("#type-form");
const userNameInput = document.querySelector(".type-name__input");
const userBirthDateInput = document.querySelector(".type-date__input");
const userEmotionInput = document.querySelector(".type-emotion__input");
const userColors = document.querySelector(".type-color__input");
const userColorOne = document.querySelector(
  ".type-color__input input:nth-child(1)"
);
const userColorTwo = document.querySelector(
  ".type-color__input input:nth-child(2)"
);

const submitButton = document.querySelector(".type__submit--icon");

function UserNameSubmit() {
  const userName = userNameInput.value;
  const birthDate = userBirthDateInput.value;
  const emotion = userEmotionInput.value;
  const color1 = userColorOne.value;
  const color2 = userColorTwo.value;
  sessionStorage.setItem("username", userName);
  sessionStorage.setItem("birthdate", birthDate);
  sessionStorage.setItem("emotion", emotion);
  sessionStorage.setItem("color1", color1);
  sessionStorage.setItem("color2", color2);
}
function ShowUserDetails() {
  userNameInput.placeholder = sessionStorage.getItem("username");
  userBirthDateInput.type = "text";
  userBirthDateInput.placeholder = sessionStorage.getItem("birthdate");
  userEmotionInput.placeholder = sessionStorage.getItem("emotion");
  userColorOne.value = sessionStorage.getItem("color1");
  userColorTwo.value = sessionStorage.getItem("color2");

  userNameInput.style.pointerEvents = "none";
  userBirthDateInput.style.pointerEvents = "none";
  userEmotionInput.style.pointerEvents = "none";
  userColors.style.pointerEvents = "none";
  document.querySelector(".type__submit--button").style.pointerEvents = "none";

  //WHAT USERS WILL SEE IN THE BOX
  document.querySelector(
    ".user-info__name"
  ).innerText = `Hi. I'm ${sessionStorage.getItem("username")}.`;
  document.querySelector(
    ".user-info__details p:nth-child(1)"
  ).innerText = `\n✷\nBut am I really ≪${sessionStorage.getItem("username")}≫?
  When I first came here, there was an odd questionnaire asking me to fill in information about myself. I wrote down my name and the date of birth date. Then I chose two different colors. I can see they made up my gradient background.
  The weirdest thing is that I felt like I was being guided by my subconscious as I answered the questions. Now, I cannot be sure if it was really me.  I feel ${sessionStorage.getItem(
    "emotion"
  )}. Who am I? And how could I fill in the specific information?`;
}

function ShowUserTime() {
  const currentDate = new Date().getTime();
  const userDate = new Date(sessionStorage.getItem("birthdate"));
  const userYear = userDate.getFullYear();
  const userMonth = userDate.getMonth() + 1;
  const userDay = userDate.getDate();

  let userMonthText = "";
  console.log(userMonth);
  if (userMonth == 1) {
    userMonthText = "January";
  } else if (userMonth == 2) {
    userMonthText = "February";
  } else if (userMonth == 3) {
    userMonthText = "March";
  } else if (userMonth == 4) {
    userMonthText = "April";
  } else if (userMonth == 5) {
    userMonthText = "May";
  } else if (userMonth == 6) {
    userMonthText = "June";
  } else if (userMonth == 7) {
    userMonthText = "July";
  } else if (userMonth == 8) {
    userMonthText = "August";
  } else if (userMonth == 9) {
    userMonthText = "September";
  } else if (userMonth == 10) {
    userMonthText = "October";
  } else if (userMonth == 11) {
    userMonthText = "November";
  } else {
    userMonthText = "December";
  }

  let timePassed = (currentDate - userDate.getTime()) / (1000 * 60 * 60 * 24);
  if (timePassed > 0) {
    //과거에 태어난 사람
    document.querySelector(
      ".user-info__details p:nth-child(2)"
    ).innerText = `\n✷\nAccording to my answers, I was born on ${userDay} ${userMonthText}, ${userYear}.
    Well, it has been a while since I was born. ${parseInt(
      (currentDate - userDate.getTime()) / 1000 / 60
    )} minutes and ${
      parseInt((currentDate - userDate.getTime()) / 1000) % 60
    } seconds. About ${parseInt(timePassed)} days have passed after my birth.
    But who did give birth to me? Was I born from someone's stomach? Or I hatched like a bird? Who will remember my birth if I do not know?`;
  } else if (timePassed < 0) {
    //미래에 태어날 사람
    document.querySelector(
      ".user-info__details p:nth-child(2)"
    ).innerText = `\n✷\nAccording to my answers, I will be born on ${userDay} ${userMonthText}, ${userYear}. In ${-parseInt(
      (currentDate - userDate.getTime()) / 1000 / 60
    )} minutes and ${-parseInt(
      ((currentDate - userDate.getTime()) / 1000) % 60
    )} seconds, I will exist in the world. But I'm already here! It might be god's mistake. If not, why am I here already? There are ${parseInt(
      -timePassed
    )} days left until my arrival.`;
  } else {
    //오늘 태어난 사람
  }
}
function ShowBackGroundColors() {
  const userInfoSection = document.querySelector("#user-info");
  userInfoSection.style = `background:radial-gradient(${sessionStorage.getItem(
    "color1"
  )},${sessionStorage.getItem("color2")})`;
}
userNameForm.addEventListener("submit", UserNameSubmit);
if (sessionStorage.getItem("username") != null) {
  document.querySelector("#user-info").style.visibility = "visible";
  ShowUserDetails();
  ShowUserTime();
  setInterval(ShowUserTime, 1000);
  ShowBackGroundColors();
} else {
  document.querySelector("#user-info").style.visibility = "hidden";
}
