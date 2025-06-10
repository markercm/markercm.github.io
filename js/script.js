// filepath: /Users/curt/git/markercm.github.io/js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // SVG icons
  const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" style="display: block; margin: auto;"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0-7v4h-2V2h2zm0 18v4h-2v-4h2zm-9-9h-4v2h4v-2zm18 0h-4v2h4v-2zM4.22 4.22l2.83 2.83-1.41 1.41L2.81 5.63l1.41-1.41zm12.73 12.73l2.83 2.83-1.41 1.41-2.83-2.83 1.41-1.41zM4.22 19.78l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zM19.78 4.22l-1.41 1.41 2.83 2.83 1.41-1.41-2.83-2.83z"/></svg>`;
  const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" style="display: block; margin: auto;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.34 0 .68-.02 1.01-.06C9.93 21.06 6 17.08 6 12S9.93 2.94 13.01 2.06C12.68 2.02 12.34 2 12 2z"/></svg>`;

  // Function to apply dark mode
  const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    if (darkModeToggle) {
      darkModeToggle.innerHTML = sunSVG; // Show sun icon
    }
  };

  // Function to disable dark mode
  const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    if (darkModeToggle) {
      darkModeToggle.innerHTML = moonSVG; // Show moon icon
    }
  };

  // Check for saved dark mode preference and set initial icon
  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode(); // Set moon icon for light mode
  }

  // Add event listener to the toggle button
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  }
});
