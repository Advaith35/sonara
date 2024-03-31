export const host = "https://mgpp.pythonanywhere.com/";
export const api = "https://mgpp.pythonanywhere.com/api/v1/";

export const category = [
  {
    link: "/all-musics",
    name: "All Musics",
    label: "All Musics",
    color: "bg-white/5",
    images: "",
  },
  {
    link: "/category/1970",
    name: "1970",
    label: "1970",
    color: "bg-green-500/90",
    from: "from-green-500",
    to: "to-green-900/5",
    re: "from-green-900/5",
    images: "https://mgpp.pythonanywhere.com/img/Betha_luka.jpg",
  },
  {
    link: "/category/1980",
    name: "1980",
    label: "1980",
    color: "bg-orange-500/90",
    from: "from-orange-500",
    to: "to-orange-900/5",
    re: "from-orange-900/5",
    images: "https://mgpp.pythonanywhere.com/img/Mr_blue_sky.jpg",
  },
  {
    link: "/category/galau",
    name: "galau",
    label: "Lagu Galau",
    color: "bg-indigo-900",
    from: "from-indigo-500",
    to: "to-indigo-900/5",
    re: "from-indigo-900/5",
    images: "https://mgpp.pythonanywhere.com/img/all-the-kid-depressed.jpeg",
  },
  {
    link: "/category/senang",
    name: "senang",
    label: "Lagu Senang",
    color: "bg-yellow-500",
    from: "from-yellow-500",
    to: "to-yellow-900/5",
    re: "from-yellow-900/5",
    images: "https://mgpp.pythonanywhere.com/img/happier.jpeg",
  },
  {
    link: "/category/indonesia",
    name: "indonesia",
    label: "Lagu Indonesia",
    color: "bg-red-500",
    from: "from-red-500",
    to: "to-red-900/5",
    re: "from-red-900/5",
    images: "https://mgpp.pythonanywhere.com/img/tak-segampang-itu.jpeg",
  },
  {
    link: "/category/chill",
    name: "chill",
    label: "Chill",
    color: "bg-blue-500",
    from: "from-blue-500",
    to: "to-blue-900/5",
    re: "from-blue-900/5",
    images: "https://mgpp.pythonanywhere.com/img/chill-vibes.jpeg",
  },
];

export const fetcher = (url, token) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
