const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 2,
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
        'prefers-color-scheme': true
      },
      importFrom: [
        './assets/css/variables-media.css',
        './assets/css/variables.css'
      ]
    }),
    cssnano({
      preset: 'default',
      autoprefixer: false,
      zindex: false,
    })
  ]
})
