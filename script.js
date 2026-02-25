// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Handle customization form submission
  const form = document.querySelector("#customize form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page reload

      // Get form values
      const product = document.querySelector("#product").value;
      const message = document.querySelector("#message").value;
      const color = document.querySelector("#color").value;

      // Simple validation

