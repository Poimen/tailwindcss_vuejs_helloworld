const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    cssnano({
      preset: 'default'
    }),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.vue']
    })
  ]
};
