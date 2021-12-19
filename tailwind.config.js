// tailwind.config.cjs
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  darkMode: 'class',  
  // more options here
  theme: {
    extend: {
      colors: {
        lightWhite: 'f0f0f0',
        lightDark: '#111',
        lightGray: '#2e2e2e'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ]
};