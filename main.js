// Get references to the menu button, navigation links, and menu button icon
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navItems = document.querySelectorAll("#nav-links a"); // Select all navigation items

// Add an event listener to the menu button for the click event
menuBtn.addEventListener("click", (e) => {
    // Toggle the 'open' class on the navigation links to show/hide them
    navLinks.classList.toggle("open");

    // Check if the navigation links are open and change the menu button icon accordingly
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Add event listeners to each navigation item for the click event
navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        // Close the menu after clicking on a nav item
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
});

// Add an event listener to the window for the resize event
window.addEventListener("resize", (e) => {
    // Ensure that the navigation links are hidden if the window is resized to a larger width
    if (window.innerWidth > 768) {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
});

// ScrollReveal animations for hero section elements
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

// Initialize Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});