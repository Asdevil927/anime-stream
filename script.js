const animeData = [

  {
    title: "Naruto",
    category: "action",
    img: "naruto.jpg",
    link: "https://www.crunchyroll.com/series/GY9PJ5KWR/naruto",
    description: "A ninja story full of action and friendship.",
    rating: "8.9",
    episodes: "220 Episodes"
  },

  {
    title: "Attack on Titan",
    category: "action",
    img: "aot.jpg",
    link: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
    description: "Humanity fights giant Titans to survive.",
    rating: "9.1",
    episodes: "94 Episodes"
  },

  {
    title: "Your Name",
    category: "romance",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    link: "https://www.netflix.com/",
    description: "A beautiful story about two strangers connected by fate.",
    rating: "8.8",
    episodes: "Movie"
  },

  {
    title: "Demon Slayer",
    category: "action",
    img: "demon-slayer.jpg",
    link: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
    description: "Tanjiro fights demons to save his sister.",
    rating: "8.7",
    episodes: "63 Episodes"
  },

  {
    title: "One Piece",
    category: "action",
    img: "one-piece.jpg",
    link: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
    description: "Luffy sails to become the Pirate King.",
    rating: "9.0",
    episodes: "1100+ Episodes"
  },

  {
    title: "Death Note",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    link: "https://www.netflix.com/",
    description: "A genius student gains a deadly supernatural notebook.",
    rating: "9.0",
    episodes: "37 Episodes"
  },

  {
    title: "Solo Leveling",
    category: "action",
    img: "solo.jpg",
    link: "https://www.crunchyroll.com/",
    description: "The weakest hunter becomes unstoppable.",
    rating: "8.8",
    episodes: "25 Episodes"
  },

  {
    title: "Jujutsu Kaisen",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
    link: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
    description: "Cursed spirits and intense supernatural battles.",
    rating: "8.8",
    episodes: "47 Episodes"
  },

  {
    title: "Bleach",
    category: "action",
    img: "https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png",
    link: "https://www.crunchyroll.com/",
    description: "Ichigo becomes a Soul Reaper and fights evil spirits.",
    rating: "8.6",
    episodes: "366 Episodes"
  },

  {
    title: "Dragon Ball",
    category: "action",
    img: "dragon-ball.jpg",
    link: "https://www.crunchyroll.com/",
    description: "Goku trains and battles powerful enemies.",
    rating: "8.5",
    episodes: "153 Episodes"
  },

  {
    title: "Horimiya",
    category: "romance",
    img: "horimiya.jpg",
    link: "https://www.crunchyroll.com/",
    description: "A wholesome high school romance story.",
    rating: "8.2",
    episodes: "26 Episodes"
  },

  {
    title: "Weathering With You",
    category: "romance",
    img: "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg",
    link: "https://www.netflix.com/",
    description: "A magical romance connected to the weather.",
    rating: "8.3",
    episodes: "Movie"
  },

  {
    title: "Vinland Saga",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
    link: "https://www.crunchyroll.com/search?q=Vinland%20Saga",
    description: "A brutal Viking revenge story.",
    rating: "8.8",
    episodes: "48 Episodes"
  },

  {
    title: "Blue Lock",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1258/126929.jpg",
    link: "https://www.crunchyroll.com/search?q=Blue%20Lock",
    description: "Football, but with psychological warfare.",
    rating: "8.3",
    episodes: "38 Episodes"
  },

  {
    title: "Mob Psycho 100",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
    link: "https://www.crunchyroll.com/search?q=Mob%20Psycho%20100",
    description: "Overpowered psychic kid with emotional issues.",
    rating: "8.7",
    episodes: "37 Episodes"
  },

  {
    title: "Code Geass",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/5/50331.jpg",
    link: "https://www.crunchyroll.com/search?q=Code%20Geass",
    description: "Genius rebellion and giant robots.",
    rating: "8.9",
    episodes: "50 Episodes"
  },

  {
    title: "Re:Zero",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1522/128039.jpg",
    link: "https://www.crunchyroll.com/search?q=Re%20Zero",
    description: "Dies repeatedly. Still has to function.",
    rating: "8.5",
    episodes: "50 Episodes"
  },

  {
    title: "Kaguya-sama",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg",
    link: "https://www.crunchyroll.com/search?q=Kaguya-sama",
    description: "Romance through psychological combat.",
    rating: "8.8",
    episodes: "37 Episodes"
  },

  {
    title: "A Silent Voice",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
    link: "https://www.netflix.com/",
    description: "A beautiful film about guilt and redemption.",
    rating: "8.9",
    episodes: "Movie"
  },

  {
    title: "Hunter x Hunter",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    link: "https://www.crunchyroll.com/search?q=Hunter%20x%20Hunter",
    description: "Adventure, battles and strategy.",
    rating: "9.0",
    episodes: "148 Episodes"
  },

  {
    title: "Parasyte",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/3/73178.jpg",
    link: "https://www.crunchyroll.com/search?q=Parasyte",
    description: "Alien parasites invade humanity.",
    rating: "8.4",
    episodes: "24 Episodes"
  },

  {
    title: "Akame ga Kill",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/1429/95946.jpg",
    link: "https://www.crunchyroll.com/search?q=Akame%20ga%20Kill",
    description: "Assassins versus corruption.",
    rating: "7.9",
    episodes: "24 Episodes"
  },

  {
    title: "Classroom of the Elite",
    category: "action",
    img: "https://cdn.myanimelist.net/images/anime/5/86830.jpg",
    link: "https://www.crunchyroll.com/search?q=Classroom%20of%20the%20Elite",
    description: "Manipulation and mind games.",
    rating: "8.3",
    episodes: "38 Episodes"
  },

  {
    title: "Toradora",
    category: "romance",
    img: "https://cdn.myanimelist.net/images/anime/13/22128.jpg",
    link: "https://www.crunchyroll.com/search?q=Toradora",
    description: "Chaotic high school romance.",
    rating: "8.2",
    episodes: "25 Episodes"
  }

];
