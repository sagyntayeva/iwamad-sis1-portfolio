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
