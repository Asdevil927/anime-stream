const trendingGrid = document.getElementById("trendingGrid");
const popularGrid = document.getElementById("popularGrid");

function createCards() {

  animeList.forEach(anime => {

    const card = `
      <div class="card" data-category="${anime.category}">
        <img src="${anime.image}" alt="${anime.title}">
        <h3>${anime.title}</h3>
      </div>
    `;

    trendingGrid.innerHTML += card;
    popularGrid.innerHTML += card;
  });
}

createCards();

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