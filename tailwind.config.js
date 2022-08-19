/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        256: "64rem",
      },
      height: {
        128: "32rem",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        16: "repeat(16, minmax(0, 1fr))",
        layout: "200px minmax(900px, 1fr) 100px",
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        16: "repeat(16, minmax(0, 1fr))",
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
