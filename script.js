const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  links.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    links.classList.remove("active");
  });
});
