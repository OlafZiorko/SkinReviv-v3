const burgerMenu = document.querySelector(".burger__menu");
const mobileMenu = document.querySelector(".drop__down--menu");
const closeMenu = document.querySelector(".close__button");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("visible");
});
closeMenu.addEventListener("click", () => {
  if (mobileMenu.classList.contains("visible")) {
    mobileMenu.classList.remove("visible");
  }
});
