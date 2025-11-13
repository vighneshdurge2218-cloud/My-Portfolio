// Mobile Navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
        navLinks.classList.remove('active');
    });
});

// Fade-in on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact Form
// compact contact-card form submit (prevents page reload)
const contactCardForm = document.getElementById('contactCardForm');
const contactStatus = document.getElementById('contactStatus');

if (contactCardForm) {
  contactCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // grab values (you can send to server here)
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const phone = document.getElementById('cphone').value.trim();
    const message = document.getElementById('cmessage').value.trim();

    // simple validation
    if (!name || !email || !message) {
      contactStatus.textContent = 'Please fill required fields.';
      contactStatus.style.color = '#ffcccb';
      return;
    }

    // show minor success (replace with ajax/send logic later)
    contactStatus.textContent = 'Message sent — thanks! ✉️';
    contactStatus.style.color = '#a6f3c5';

    // reset form after a short delay
    setTimeout(() => {
      contactCardForm.reset();
      contactStatus.textContent = '';
    }, 1600);
  });
}

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks for your message! I’ll get back to you soon.");
    contactForm.reset();
});
// ==========================
// Particle Background Script
// ==========================

const particleContainer = document.getElementById("particles");

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // random horizontal position
    particle.style.left = Math.random() * 100 + "%";

    // random animation duration
    const duration = 4 + Math.random() * 4;
    particle.style.animationDuration = duration + "s";

    // random size
    const size = 3 + Math.random() * 4;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particleContainer.appendChild(particle);

    // remove after animation ends
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// create a particle every 300ms
setInterval(createParticle, 300);
