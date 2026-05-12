const animeData = [
  {
    title: "Naruto",
    category: "action",
    img: "naruto.jpg",
    link: "https://www.crunchyroll.com/series/GY9PJ5KWR/naruto"
  },
  {
    title: "Attack on Titan",
    category: "action",
    img: "aot.jpg",
    link: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan"
  },
  {
    title: "Your Name",
    category: "romance",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    link: "https://www.netflix.com/"
  },
  {
    title: "Demon Slayer",
    category: "action",
    img: "demon-slayer.jpg",
    link: "https://www.crunchyroll.com/"
  }
];

const container = document.getElementById("animeContainer");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".category-btn");

let selectedCategory = "all";
let searchText = "";

function renderAnime() {

  container.innerHTML = "";

  const filteredAnime = animeData.filter(anime => {

    const matchCategory =
      selectedCategory === "all" ||
      anime.category === selectedCategory;

    const matchSearch =
      anime.title.toLowerCase().includes(searchText);

    return matchCategory && matchSearch;
  });

  filteredAnime.forEach(anime => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <a href="${anime.link}" target="_blank">
        <img src="${anime.img}" alt="${anime.title}">
        <h3>${anime.title}</h3>
      </a>
    `;

    container.appendChild(card);
  });
}

search.addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase();
  renderAnime();
});

buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    selectedCategory = btn.dataset.category;

    renderAnime();
  });

});

renderAnime();
