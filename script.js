document.querySelectorAll(".category-btn").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    document.querySelectorAll(".card").forEach(card => {
      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});