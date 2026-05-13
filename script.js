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
    link: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba"
  },

  {
    title: "One Piece",
    category: "action",
    img: "one-piece.jpg",
    link: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece"
  },

  {
    title: "Death Note",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    link: "https://www.netflix.com/"
  },

  {
    title: "Solo Leveling",
    category: "action",
    img: "solo.jpg",
    link: "https://www.crunchyroll.com/"
  },

  {
    title: "Jujutsu Kaisen",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
    link: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen"
  },

  {
    title: "Bleach",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png",
    link: "https://www.crunchyroll.com/"
  },

  {
    title: "Dragon Ball",
    category: "action",
    img: "dragon-ball.jpg",
    link: "https://www.crunchyroll.com/"
  },

  {
    title: "Horimiya",
    category: "romance",
    img: "horimiya.jpg",
    link: "https://www.crunchyroll.com/"
  },

  {
    title: "Weathering With You",
    category: "romance",
    img: "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg",
    link: "https://www.netflix.com/"
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
      <img src="${anime.img}" alt="${anime.title}">
      <h3>${anime.title}</h3>
    `;

    card.addEventListener("click", () => {

      document.getElementById("animeModal").style.display = "block";

      document.getElementById("modalImg").src = anime.img;

      document.getElementById("modalTitle").innerText = anime.title;

      document.getElementById("modalCategory").innerText =
        "Category: " + anime.category;

      document.getElementById("watchBtn").href = anime.link;

    });

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

const modal = document.getElementById("animeModal");

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {

  modal.style.display = "none";

});

window.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.style.display = "none";

  }

});

renderAnime();
