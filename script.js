const search = document.getElementById("search");
const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".card");

let activeCategory = "all";

// Filter function
function filterCards() {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const category = card.dataset.category;

    const matchSearch = text.includes(value);
    const matchCategory =
      activeCategory === "all" || category === activeCategory;

    if (matchSearch && matchCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Search
search.addEventListener("keyup", filterCards);

// Category filter + active button UI
buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    activeCategory = button.dataset.category;
    filterCards();
  });
});
