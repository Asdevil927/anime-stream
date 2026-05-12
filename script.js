const search = document.getElementById("search");
const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".card");

let selectedCategory = "all";
let searchText = "";

function filterCards() {
  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    const category = card.getAttribute("data-category");

    const matchCategory = selectedCategory === "all" || category === selectedCategory;
    const matchSearch = title.includes(searchText);

    card.style.display = (matchCategory && matchSearch) ? "block" : "none";
  });
}

search.addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase();
  filterCards();
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedCategory = btn.getAttribute("data-category");
    filterCards();
  });
});
