const mobileMenu = document.querySelector(".mobile__list");
const mobileToggle = document.querySelector(".nav__toggle");
let isMobileOpen = false;

mobileToggle.addEventListener("click", () => {
  isMobileOpen = !isMobileOpen;
  if (isMobileOpen) {
    mobileToggle.classList.remove("fa-bars");
    mobileToggle.classList.add("fa-close");
    mobileMenu.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    mobileToggle.classList.remove("fa-close");
    mobileToggle.classList.add("fa-bars");
    mobileMenu.style.display = "none";
    document.body.style.overflowY = "auto";
  }
});
