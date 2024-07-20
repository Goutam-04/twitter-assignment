/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#092047",
        text: "#00000033",
      },
      backgroundImage: {
        'fade-circle': 'radial-gradient(circle, rgba(33,150,243,0.5), rgba(33,150,243,0))',
      },
    },
  },
  plugins: [],
};
