const navbarEl = document.getElementById("navbar");
const menuMobileEl = document.getElementById("menuMobileIcon");
const navbarMenuEl = document.getElementById("navbarMenuEl");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const bulletCrewFilter = document.querySelectorAll(".bullet_crew");

menuMobileEl.addEventListener("click", () => {
  navbarMenuEl.classList.toggle("navbar_menu");
});

closeMenuBtn.addEventListener("click", () => {
  navbarMenuEl.classList.toggle("navbar_menu");
});

bulletCrewFilter.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    bullet.classList.add("active");
  });
});
