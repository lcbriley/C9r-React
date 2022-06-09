module.exports = {
  content: ['public/index.html', 'src/App.js', 'src/App.test.js', 'src/index.js','src/AddField.js', 'src/AddGroup.js', 'src/DeleteField.js', 'src/DeleteGroup.js', 'src/EditField.js', 'src/EditGroup.js', 'src/ExpandGroup.js', 'src/Popup.js', 'src/visibility.js'],
  theme: {
    
    extend: {
      colors: {
        'light-blue': '#2FB8FF',
        'dark-blue': '#0B8CCE',
        'dark-grey': '#8E8E92',
      },
      dropShadow: {
        'drop-shadow-blue': '0 4px 3px rgb(47 184 255 / 0.07)'
      }
    },
  plugins: [require('@tailwindcss/forms'),],
}
}