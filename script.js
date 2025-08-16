document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});
