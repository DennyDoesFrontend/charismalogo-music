document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Music Player Controls
  const playPauseBtn = document.querySelector("#playPauseBtn");
  const pauseIcon = document.querySelector("#pauseIcon");
  const playIcon = document.querySelector("#playIcon");
  const heartIcon = document.querySelector("#heartIcon");

  let isPlaying = false;

  playPauseBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      pauseIcon.style.display = "none";
      playIcon.style.display = "block";
    } else {
      pauseIcon.style.display = "block";
      playIcon.style.display = "none";
    }
  });

  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("liked");
  });

  // Carousel Controls
  const carouselInner = document.querySelector(".carousel-inner");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const cards = document.querySelectorAll(".event-card");
  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20; // Include margin
    carouselInner.style.transform = translateX(
      -`${currentIndex * cardWidth}px`
    );
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Newsletter Form (Placeholder for functionality)
  const subscribeBtn = document.querySelector("#subscribeBtn");
  subscribeBtn.addEventListener("click", () => {
    const emailInput = document.querySelector("#newsletterEmail").value;
    if (emailInput) {
      alert("Thank you for subscribing!");
      document.querySelector("#newsletterEmail").value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Responsive Carousel
  window.addEventListener("resize", updateCarousel);
});
