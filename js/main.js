// Start header

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(function (nav) {
  nav.addEventListener("click", function (e) {
    e.preventDefault();

    // go to section
    let navHref = this.getAttribute("href");
    let sectionOffset = document.querySelector(navHref).offsetTop;

    window.scrollTo({
      top: sectionOffset,
      behavior: "smooth",
    });

    // Add Active class
    navLink.forEach(function (nav) {
      nav.classList.remove("active");
      e.currentTarget.classList.add("active");
    });
  });
});

/**
 * Testimonials slider
 */
new Swiper(".swiper-container", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
