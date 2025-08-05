// Scroll animation for education and experience items
const revealItems = (selector, visibleClass) => {
  const items = document.querySelectorAll(selector);
  const triggerBottom = window.innerHeight * 0.9;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add(visibleClass);
    } else {
      item.classList.remove(visibleClass);
    }
  });
};

// Active navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const highlightNav = () => {
  let current = "home"; // Default

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 150;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      current = section.getAttribute("id");
    }

    // Special case for last section (contact)
    if (index === sections.length - 1 && scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};


// Form submit handler with reset
function submitForm(event) {
  event.preventDefault();
  document.getElementById('formMessage').textContent = "Thanks! Your message has been submitted.";
  event.target.reset(); // ✅ This clears the form
}

// Event listeners
window.addEventListener('scroll', () => {
  revealItems('.education-item', 'visible');
  revealItems('.experience-box', 'visible');
  highlightNav();
});

window.addEventListener('load', () => {
  revealItems('.education-item', 'visible');
  revealItems('.experience-box', 'visible');
  highlightNav();
});

// Attach form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', submitForm);
}
