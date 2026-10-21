// ===== Theme toggle =====
const html = document.documentElement;
const themeButton = document.getElementById('theme-toggle');

function setTheme(theme) {
  html.dataset.theme = theme;
  themeButton.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  themeButton.setAttribute('aria-pressed', theme === 'dark');
  localStorage.setItem('theme', theme);
}

// Use the saved theme, light by default
setTheme(localStorage.getItem('theme') || 'light');

themeButton.addEventListener('click', () => {
  setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark');
});

// ===== Contact form validation =====
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Show or clear the error under one field
function setError(input, message) {
  document.getElementById(input.id + '-error').textContent = message;
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // no page reload

  const { name, email, message } = form.elements;
  const errors = [];

  // Name
  if (name.value.trim() === '') {
    setError(name, 'Please enter your name.');
    errors.push(name);
  } else {
    setError(name, '');
  }

  // Email: empty and wrong format get different messages
  if (email.value.trim() === '') {
    setError(email, 'Please enter your email.');
    errors.push(email);
  } else if (!emailPattern.test(email.value.trim())) {
    setError(email, 'Email format is wrong. Example: name@example.com');
    errors.push(email);
  } else {
    setError(email, '');
  }

  // Message
  if (message.value.trim() === '') {
    setError(message, 'Please enter a message.');
    errors.push(message);
  } else {
    setError(message, '');
  }

  if (errors.length > 0) {
    status.textContent = '';
    errors[0].focus();
    return;
  }

  status.textContent = 'Thank you! Your message is valid.';
  form.reset();
});
