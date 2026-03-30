// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// Animate elements into view when they enter the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.feature-card, .step, .pet-pill, .proof-stat').forEach(el => {
  el.classList.add('animate-in');
  observer.observe(el);
});

// Inject animation styles dynamically so there's no flash
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .45s ease, transform .45s ease;
  }
  .animate-in.visible {
    opacity: 1;
    transform: none;
  }
`;
document.head.appendChild(style);
