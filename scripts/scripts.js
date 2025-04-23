const mobileMenu = document.querySelector(".mobile-nav__list");
const mobileToggle = document.querySelector(".nav__toggle");
const mobileLinks = document.querySelectorAll(".mobile-nav__item-link");

let isMobileOpen = false;

function closeMobileMenu() {
  isMobileOpen = false;
  mobileToggle.classList.remove("fa-close");
  mobileToggle.classList.add("fa-bars");
  mobileMenu.style.display = "none";
  document.body.style.overflowY = "auto";
}

mobileToggle.addEventListener("click", () => {
  isMobileOpen = !isMobileOpen;
  if (isMobileOpen) {
    mobileToggle.classList.remove("fa-bars");
    mobileToggle.classList.add("fa-close");
    mobileMenu.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    closeMobileMenu();
  }
});

// 👇 Add this to close menu when a mobile link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});
