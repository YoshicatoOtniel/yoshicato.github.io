// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika Hamburger menu di click
document.querySelector("#Hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click di luar side bar untuk menghilangkan nav
const menu = document.querySelector("#Hamburger-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
