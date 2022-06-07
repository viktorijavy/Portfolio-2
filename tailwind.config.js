module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Bounces for a total of 5 seconds
        'bounce-short': 'bounce 1s ease-out 2.5'
      }
    },
  },
  plugins: [],
}
