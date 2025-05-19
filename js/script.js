const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const dropdown = document.querySelector(".dropdown");
const dropbtn = dropdown.querySelector(".dropbtn");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.innerHTML = navbar.classList.contains("active")
    ? "&times;"
    : "&#9776;";
});
dropbtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 992) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  }
});
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target) && window.innerWidth <= 992) {
    dropdown.classList.remove("open");
  }
});
