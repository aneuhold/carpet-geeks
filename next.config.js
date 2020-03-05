// next.config.js
const withPlugins = require("next-compose-plugins");
const nextCSS = require("@zeit/next-css");
const optimizedImages = require("next-optimized-images");
module.exports = withPlugins([
  nextCSS,
  [
    optimizedImages,
    {
      responsive: {
        sizes: [100, 300, 500, 1000]
      },
      mozjpeg: {
        quality: 85
      }
    }
  ]
]);
