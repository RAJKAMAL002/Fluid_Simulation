/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
        'custom-gradient1': 'linear-gradient(180deg, #0D061F 0%, #251E35 100%)',
      },
      gridTemplateColumns: {
        'custom-layout': '0.8fr 1.5fr 0.5fr',
      },
      fontFamily: {
        custom: ['"Sora", Sans-serif', 'sans-serif'],
      },
      screens: {
        'max-sm': { 'max': '639px' }, // Applies to screens smaller than 640px
        'max-md': { 'max': '767px' }, // Applies to screens smaller than 768px
        'max-lg': { 'max': '1023px' }, // Applies to screens smaller than 1024px
        'max-xl': { 'max': '1279px' }, // Applies to screens smaller than 1280px
        'max-2xl': { 'max': '1535px' }, // Applies to screens smaller than 1536px
      },
    },
  },
  plugins: [],
}