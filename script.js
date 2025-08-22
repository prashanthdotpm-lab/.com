
// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Simple client-side validation demo
  const forms = document.querySelectorAll("form[data-validate='true']");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      let valid = true;
      form.querySelectorAll("[data-required='true']").forEach((el) => {
        const error = el.parentElement.querySelector(".error");
        if (!el.value || (el.type === "checkbox" && !el.checked)) {
          valid = false;
          if (error) error.style.display = "block";
        } else {
          if (error) error.style.display = "none";
        }
      });
      if (!valid) {
        e.preventDefault();
        form.querySelector("[data-required='true']")?.focus();
      }
    });
  });

  // Show/Hide password toggles
  document.querySelectorAll("[data-toggle='password']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.getAttribute("data-target"));
      if (!target) return;
      target.type = target.type === "password" ? "text" : "password";
      btn.setAttribute("aria-pressed", target.type === "text" ? "true" : "false");
    });
  });
});
