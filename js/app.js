const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("nav--toggle");
});
