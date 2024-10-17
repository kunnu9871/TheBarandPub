/** @type {import('tailwindcss').Config, import('@tailwindcss/forms')} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "cWhite" : '#f7f7f8',
        "cBlack": "#00072d",
        "cBlue": "#0066ff",
        "cBlueHover": "#1785cf"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
      }
    },
  },
  plugins: [],
};
