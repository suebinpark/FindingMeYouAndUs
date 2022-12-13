if (sessionStorage.getItem("username") != null) {
  const navName = document.querySelector(".nav-bar__name");
  navName.style.fontFamily = "reklame-script";
  navName.style.fontSize = "27px";
  navName.innerText = sessionStorage.getItem("username");
}
