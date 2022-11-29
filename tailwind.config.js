/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-parent":
          "url(./images/backgraund/noch-1280x720-nebo-zvezdi-otrajenie-ozero-23779 1.png)",
          
        sea: "url(./images/taskArea/sea.png)",
        auturmn: "url(./images/taskArea/auturmn.jpeg)",
        christmas: "url(./images/taskArea/christmas.jpg)",
        springForest: "url(./images/taskArea/SpringForest.jpg)",

        noTask:
          "url(./images/taskArea/noTaskYet/275-2751491_vector-free-stock-review-clipart-magnifying-glass-search.png)",
        allTask: "url(./images/sidebar/all.png)",
      }),
      colors: { formColor: "rgba(71, 67, 67, 0.9)" },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
