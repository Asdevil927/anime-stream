const animeData = [

  {
    title: "Naruto",
    category: "action",
    img: "naruto.jpg",
    link: "https://www.crunchyroll.com/series/GY9PJ5KWR/naruto",
    description: "A ninja story full of action and friendship."
  },

  {
    title: "Attack on Titan",
    category: "action",
    img: "aot.jpg",
    link: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
    description: "Humanity fights giant Titans to survive."
  },

  {
    title: "Your Name",
    category: "romance",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    link: "https://www.netflix.com/",
    description: "A beautiful story about two strangers connected by fate."
  },

  {
    title: "Demon Slayer",
    category: "action",
    img: "demon-slayer.jpg",
    link: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
    description: "Tanjiro fights demons to save his sister."
  },

  {
    title: "One Piece",
    category: "action",
    img: "one-piece.jpg",
    link: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
    description: "Luffy sails to become the Pirate King."
  },

  {
    title: "Death Note",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    link: "https://www.netflix.com/",
    description: "A genius student gains a deadly supernatural notebook."
  },

  {
    title: "Solo Leveling",
    category: "action",
    img: "solo.jpg",
    link: "https://www.crunchyroll.com/",
    description: "The weakest hunter becomes unstoppable."
  },

  {
    title: "Jujutsu Kaisen",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
    link: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
    description: "Cursed spirits and intense supernatural battles."
  },

  {
    title: "Bleach",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png",
    link: "https://www.crunchyroll.com/",
    description: "Ichigo becomes a Soul Reaper and fights evil spirits."
  },

  {
    title: "Dragon Ball",
    category: "action",
    img: "dragon-ball.jpg",
    link: "https://www.crunchyroll.com/",
    description: "Goku trains and battles powerful enemies."
  },

  {
    title: "Horimiya",
    category: "romance",
    img: "horimiya.jpg",
    link: "https://www.crunchyroll.com/",
    description: "A wholesome high school romance story."
  },

  {
    title: "Weathering With You",
    category: "romance",
    img: "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg",
    link: "https://www.netflix.com/",
    description: "A magical romance connected to the weather."
  },

  {
    title: "Vinland Saga",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
    link: "https://www.crunchyroll.com/search?q=Vinland%20Saga",
    description: "A brutal Viking revenge story."
  },

  {
    title: "Blue Lock",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1258/126929.jpg",
    link: "https://www.crunchyroll.com/search?q=Blue%20Lock",
    description: "Football with psychological warfare."
  },

  {
    title: "Mob Psycho 100",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
    link: "https://www.crunchyroll.com/search?q=Mob%20Psycho%20100",
    description: "Overpowered psychic kid trying to live normally."
  },

  {
    title: "Code Geass",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/5/50331.jpg",
    link: "https://www.crunchyroll.com/search?q=Code%20Geass",
    description: "Strategic rebellion and giant robots."
  },

  {
    title: "Re:Zero",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1522/128039.jpg",
    link: "https://www.crunchyroll.com/search?q=Re%20Zero",
    description: "A boy trapped in a deadly time loop."
  },

  {
    title: "Kaguya-sama",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg",
    link: "https://www.crunchyroll.com/search?q=Kaguya-sama",
    description: "Romance through mind games."
  },

  {
    title: "A Silent Voice",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
    link: "https://www.netflix.com/",
    description: "A story about guilt and redemption."
  },

  {
    title: "Hunter x Hunter",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    link: "https://www.crunchyroll.com/search?q=Hunter%20x%20Hunter",
    description: "Adventure, strategy and powerful battles."
  },

  {
    title: "Parasyte",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/3/73178.jpg",
    link: "https://www.crunchyroll.com/search?q=Parasyte",
    description: "Alien parasites invade humanity."
  },

  {
    title: "Akame ga Kill",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1429/95946.jpg",
    link: "https://www.crunchyroll.com/search?q=Akame%20ga%20Kill",
    description: "Assassins fighting corruption."
  },

  {
    title: "Classroom of the Elite",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/5/86830.jpg",
    link: "https://www.crunchyroll.com/search?q=Classroom%20of%20the%20Elite",
    description: "Manipulation and elite school politics."
  },

  {
    title: "Toradora",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/13/22128.jpg",
    link: "https://www.crunchyroll.com/search?q=Toradora",
    description: "Chaotic high school romance."
  },

  {
    title: "Your Lie in April",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/3/67177.jpg",
    link: "https://www.crunchyroll.com/search?q=Your%20Lie%20in%20April",
    description: "Music, emotions and heartbreak."
  },

  {
    title: "Fire Force",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1666/102761.jpg",
    link: "https://www.crunchyroll.com/search?q=Fire%20Force",
    description: "Fire-powered soldiers battle infernals."
  },

  {
    title: "The Promised Neverland",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg",
    link: "https://www.crunchyroll.com/search?q=The%20Promised%20Neverland",
    description: "Children uncover terrifying secrets."
  },

  {
    title: "Darling in the FranXX",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/1615/102179.jpg",
    link: "https://www.crunchyroll.com/search?q=Darling%20in%20the%20FranXX",
    description: "Mecha battles and emotional bonds."
  },

  {
    title: "Clannad",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/13/22134.jpg",
    link: "https://www.crunchyroll.com/search?q=Clannad",
    description: "Family, emotions and relationships."
  },

  {
    title: "Record of Ragnarok",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1730/117589.jpg",
    link: "https://www.crunchyroll.com/search?q=Record%20of%20Ragnarok",
    description: "Gods and humans battle for humanity’s survival."
  }

];

const container = document.getElementById("animeContainer");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".category-btn");

const modal = document.getElementById("animeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const watchBtn = document.getElementById("watchBtn");
const closeBtn = document.querySelector(".close-btn");

const exploreBtn = document.getElementById("exploreBtn");
const featuredAnime = document.getElementById("featuredAnime");

let selectedCategory = "all";
let searchText = "";

function renderAnime() {

  container.innerHTML = "";

  const filteredAnime = animeData.filter((anime) => {

    const matchCategory =
      selectedCategory === "all" ||
      anime.category === selectedCategory;

    const matchSearch =
      anime.title.toLowerCase().includes(searchText);

    return matchCategory && matchSearch;

  });

  if (filteredAnime.length === 0) {

    container.innerHTML = `
      <h2 style="text-align:center; width:100%;">
        No Anime Found
      </h2>
    `;

    return;
  }

  filteredAnime.forEach((anime) => {

    const card = document.createElement("div");

    card.classList.add("card");

    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavorite =
      favorites.includes(anime.title);

    card.innerHTML = `
      <img src="${anime.img}" alt="${anime.title}">

      <h3>${anime.title}</h3>

      <button class="fav-btn">
        ${isFavorite ? "✅ Added" : "❤️ Favorite"}
      </button>
    `;

    card.addEventListener("click", () => {

      modal.style.display = "block";

      modalImg.src = anime.img;

      modalTitle.innerText = anime.title;

      modalCategory.innerText =
        "Category: " + anime.category;

      modalDescription.innerText =
        anime.description;

      watchBtn.href = anime.link;

    });

    const favBtn = card.querySelector(".fav-btn");

    favBtn.addEventListener("click", (e) => {

      e.stopPropagation();

      let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      if (!favorites.includes(anime.title)) {

        favorites.push(anime.title);

        localStorage.setItem(
          "favorites",
          JSON.stringify(favorites)
        );

        favBtn.innerText = "✅ Added";

      } else {

        favorites = favorites.filter(
          fav => fav !== anime.title
        );

        localStorage.setItem(
          "favorites",
          JSON.stringify(favorites)
        );

        favBtn.innerText = "❤️ Favorite";

      }

    });

    container.appendChild(card);

  });

}

search.addEventListener("input", (e) => {

  searchText = e.target.value.toLowerCase();

  renderAnime();

});

buttons.forEach((btn) => {

  btn.addEventListener("click", () => {

    buttons.forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");

    selectedCategory = btn.dataset.category;

    renderAnime();

  });

});

closeBtn.addEventListener("click", () => {

  modal.style.display = "none";

});

window.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.style.display = "none";

  }

});

exploreBtn.addEventListener("click", () => {

  document
    .querySelector(".anime-container")
    .scrollIntoView({
      behavior: "smooth"
    });

});

const featuredList = [
  "Naruto",
  "Attack on Titan",
  "One Piece",
  "Demon Slayer",
  "Jujutsu Kaisen",
  "Tokyo Ghoul",
  "Chainsaw Man",
  "Blue Lock",
  "Solo Leveling"
];

let currentFeatured = 0;

setInterval(() => {

  currentFeatured++;

  if (currentFeatured >= featuredList.length) {
    currentFeatured = 0;
  }

  featuredAnime.innerText =
    featuredList[currentFeatured];

}, 2500);

renderAnime();
