# Ranida Sagyntayeva — Portfolio

**Live site:** https://sagyntayeva.github.io/iwamad-sis1-portfolio/

## About the site

This is my personal portfolio for IWaMAD SIS Assignment 1, built with HTML5, CSS3 and vanilla JavaScript.
It has three sections: About Me, Projects with my Python games and IWaMAD coursework, and Contact.
The contact form is validated with my own JavaScript, and the whole page can switch between light and dark mode.

## Design decisions

1. **Simple, clean look.** White background, dark text and one pink accent colour, so the content and projects stand out and the page is easy to read.
2. **Mobile-first layout.** On a phone everything is one column. After testing at 375px I moved the menu links to their own row under the name, so the header does not overflow. From 768px About and Contact become two columns, and from 1024px projects show in three columns.
3. **Colours as variables.** All colours, font sizes and spacing are CSS variables. Dark mode only changes the colour variables through `html[data-theme="dark"]`, so the whole page switches at once.

## Structure

```
index.html       page markup
css/style.css    design tokens, layout, dark theme
js/script.js     theme toggle and form validation
assets/logo.svg  logo
```

## Run locally

Open `index.html` in a browser.
