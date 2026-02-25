document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product-card");

  products.forEach(card => {
    card.addEventListener("click", () => {
      alert(`You selected: ${card.querySelector("h3").textContent}! 🎉`);
    });
  });
});
