const navbarEl = document.getElementById("navbar");
const menuMobileEl = document.getElementById("menuMobileIcon");
const navbarMenuEl = document.getElementById("navbarMenuEl");
const closeMenuBtn = document.getElementById("closeMenuBtn");

menuMobileEl.addEventListener("click", () => {
  navbarMenuEl.classList.toggle("navbar_menu");
});

closeMenuBtn.addEventListener("click", () => {
  navbarMenuEl.classList.toggle("navbar_menu");
});
