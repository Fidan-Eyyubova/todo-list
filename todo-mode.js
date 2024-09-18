document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("mode-toggle");
  
    modeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      modeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
    });
  });
  