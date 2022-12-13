const scrollTopButton = document.querySelector(".return_top");
const scrollBottomButton = document.querySelector(".return_bottom");

scrollTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
scrollBottomButton.addEventListener("click", function () {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
});
