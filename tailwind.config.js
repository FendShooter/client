module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00395E',
        secondary: '#99F8FF',
      },
    },
    fontFamily: {
      body: ['Lato, sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
