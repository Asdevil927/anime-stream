const search = document.getElementById("search");
const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".card");

let activeCategory = "all";

// Filter function (single source of truth)
function filterCards() {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const category = card.dataset.category;

    const matchSearch = text.includes(value);
    const matchCategory = activeCategory === "all" || category === activeCategory;

    if (matchSearch && matchCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Search
search.addEventListener("keyup", filterCards);

// Category buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    filterCards();
  });
});
