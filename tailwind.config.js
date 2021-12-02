// tailwind.config.cjs
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  // more options here
  theme: {
    extend: {
      colors: {
        lightDark: '#111',
        lightGray: '#2e2e2e'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },

};