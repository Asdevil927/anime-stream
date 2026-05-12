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
  },
  {
    title: "Tokyo Ghoul",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1498/134443.jpg",
    link: "https://www.crunchyroll.com/search?q=Tokyo%20Ghoul"
  },
  {
    title: "Chainsaw Man",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    link: "https://www.crunchyroll.com/search?q=Chainsaw%20Man"
  },
  {
    title: "Black Clover",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/2/88336.jpg",
    link: "https://www.crunchyroll.com/search?q=Black%20Clover"
  },
  {
    title: "Haikyuu",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/7/76014.jpg",
    link: "https://www.crunchyroll.com/search?q=Haikyuu"
  },
  {
    title: "Spy x Family",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
    link: "https://www.crunchyroll.com/search?q=Spy%20x%20Family"
  },
  {
    title: "Steins;Gate",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
    link: "https://www.crunchyroll.com/search?q=Steins%20Gate"
  },
  {
    title: "Fullmetal Alchemist",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    link: "https://www.crunchyroll.com/search?q=Fullmetal%20Alchemist%20Brotherhood"
  },
  {
    title: "My Hero Academia",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    link: "https://www.crunchyroll.com/search?q=My%20Hero%20Academia"
  },
  {
    title: "Tokyo Revengers",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1839/122012.jpg",
    link: "https://www.crunchyroll.com/search?q=Tokyo%20Revengers"
  }
];

const container = document.getElementById("animeContainer");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".category-btn");

let selectedCategory = "all";
let searchText = "";

function renderAnime(list) {
  container.innerHTML = "";

  list.forEach(anime => {
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

function filterCards() {

  const filtered = animeData.filter(anime => {

    const matchCategory =
      selectedCategory === "all" ||
      anime.category === selectedCategory;

    const matchSearch =
      anime.title.toLowerCase().includes(searchText);

    return matchCategory && matchSearch;
  });

  renderAnime(filtered);
}

search.addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase();
  filterCards();
});

buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    selectedCategory =
      btn.getAttribute("data-category");

    filterCards();

  });

});

renderAnime(animeData);
