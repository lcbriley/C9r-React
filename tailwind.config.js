module.exports = {
  content: ['public/index.html', 'src/App.js', 'src/App.test.js', 'src/index.js'],
  theme: {
    
    extend: {
      colors: {
        'light-blue': '#2FB8FF',
        'dark-blue': '#0B8CCE',
        'dark-grey': '#8E8E92',
      }
    },
  plugins: [require('@tailwindcss/forms'),],
}
}