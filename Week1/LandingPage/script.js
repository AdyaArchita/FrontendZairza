const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const visitCounter = document.getElementById('visitCounter');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Toggle dark mode
themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
});

// Visit counter logic
let count = localStorage.getItem("visitCount") || 0;
visitCounter.textContent = count;

function incrementCounter() {
  count++;
  localStorage.setItem("visitCount", count);
  visitCounter.textContent = count;
  visitCounter.classList.add("animate-pop");
  setTimeout(() => visitCounter.classList.remove("animate-pop"), 300);

  const confettiMilestones = [10, 25, 50, 100];
  if (confettiMilestones.includes(Number(count)) || count % 10 === 0) {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
  colors: ['#bb0000', '#ffffff'],
});
  }
}

// Contact form handling
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  formMessage.classList.remove('hidden');
  contactForm.reset();
  setTimeout(() => formMessage.classList.add('hidden'), 4000);
});

// Scroll to top button behavior
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('hidden', window.scrollY < 200);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
