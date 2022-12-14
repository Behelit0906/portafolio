/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#6e07f3",
        titleColor: "#141c3a",
        bodyColor: "#222222",
        red: "#ff0000",
        green: "#00c24d",
      },
      fontFamily: {
        europa: "europa",
        europanuova: "europanuova",
      },
    },
  },
  plugins: [],
};
