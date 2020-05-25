// Load Modules
const postcssPresetEnv = require(`postcss-preset-env`)
const cssnano          = require(`cssnano`)

// Load Environment Variables
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
require('dotenv').config({
  path: `.env.${activeEnv}`
})

module.exports = {
  siteMetadata: {
    title: `Log - Hifrnd`,
    siteUrl: `https://log.hifrnd.com`,
    description: `Bonsoir.`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
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
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
  ]
}
