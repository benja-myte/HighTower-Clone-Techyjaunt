// Scroll animation for sections
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('animate-fade');
    } else {
      el.classList.remove('animate-fade');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);
