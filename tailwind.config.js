/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'], // update as per your project
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      maskImage: {
        'fade-x': 'linear-gradient(90deg, transparent 0%, #ffffff 300px, #ffffff calc(100vw - 300px), transparent 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-fade-x': {
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #ffffff 300px, #ffffff calc(100vw - 300px), transparent 100%)',
          maskImage: 'linear-gradient(90deg, transparent 0%, #ffffff 300px, #ffffff calc(100vw - 300px), transparent 100%)',
        },
      });
    },
  ],
};
