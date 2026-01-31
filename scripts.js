// ===== Navbar Toggle Mobile =====
const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// ===== Menu Fokus & Active =====
// Semua link navbar desktop
const navLinks = document.querySelectorAll(".nav-menu a");

// Semua link navbar mobile
const mobileLinks = document.querySelectorAll(".mobile-nav a");

// Fungsi untuk set focus & active
function setActive(link, linksList) {
  linksList.forEach(l => l.classList.remove("active")); // hapus active semua
  link.classList.add("active"); // set active ke link yg diklik
  link.focus(); // fokus
}

// Desktop navbar
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    setActive(link, navLinks);
  });
});

// Mobile navbar
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    setActive(link, mobileLinks);

    // tutup mobile nav saat link diklik
    mobileNav.classList.remove("active");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

// ===== Dropdown Mobile =====
const mobileDropdowns = document.querySelectorAll(".mobile-nav .dropdown");

mobileDropdowns.forEach(drop => {
  const btn = drop.querySelector(".drop-btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // cegah scroll
    drop.classList.toggle("active");

    const menu = drop.querySelector(".dropdown-menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
});

// ===== Image Slider =====
const slides = document.querySelectorAll(".image-slider img");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let current = 0;

// tampilkan slide pertama
slides[current].classList.add("active");

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.remove("active", "enter");
    if (i === index) {
      img.classList.add("active", "enter");
    }
  });
}

// Next
nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Prev
prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});
