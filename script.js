document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector("nav ul")

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show")
      menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("show") ? "true" : "false")
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      navMenu &&
      navMenu.classList.contains("show") &&
      !event.target.closest("nav") &&
      !event.target.classList.contains("menu-toggle")
    ) {
      navMenu.classList.remove("show")
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false")
      }
    }
  })
})
