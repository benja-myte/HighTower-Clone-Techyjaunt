// Query DOM elements: menu toggle, nav links container, and menu icon
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navItems = document.querySelectorAll("#nav-links a"); // All navigation links

// Toggle navigation open/closed on menu button click
menuBtn.addEventListener("click", (e) => {
    // Toggle 'open' class to expand/collapse nav links
    navLinks.classList.toggle("open");

    // Update the menu icon based on nav open state
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the mobile menu when a navigation link is clicked
navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        // Remove open state and reset icon
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
});

// Ensure menu state is reset when window is resized
window.addEventListener("resize", (e) => {
    // Hide mobile nav and reset icon on wider screens
    if (window.innerWidth > 768) {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
});

// ScrollReveal animation settings and targets
const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".destination__card", {
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".showcase__image img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".banner__card", {
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
});

// Initialize testimonial carousel (Swiper)
const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});