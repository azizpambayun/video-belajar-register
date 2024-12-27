/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Sesuaikan dengan struktur folder project kamu
  theme: {
    extend: {
      colors: {
        "videobelajar-green": "#3ECf4C",
        "videobelajar-light-green": "#E8FDE1",
        "videobelajar-primary-text": "#222325",
        "videobelajar-secondary-text": "#747474",
        "video-belajar-orange": "#ffbd3a",
      },
      fontFamily: {
        lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
