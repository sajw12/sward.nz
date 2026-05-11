const savedTheme = localStorage.getItem("pref-theme");
if (savedTheme === "dark" || savedTheme === "light") {
  document.documentElement.dataset.theme = savedTheme;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.dataset.theme = "dark";
} else {
  document.documentElement.dataset.theme = "light";
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const currentYear = document.querySelector("#current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const html = document.documentElement;
      const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
      html.dataset.theme = nextTheme;
      localStorage.setItem("pref-theme", nextTheme);
    });
  }
});
