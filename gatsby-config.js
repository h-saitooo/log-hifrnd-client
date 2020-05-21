const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

// Load Environment Variables
require('dotenv').config({
  path: `.env.${activeEnv}`
})

module.exports = {
  siteMetadata: {
    title: `log - Hifrnd`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
        host: activeEnv !== `development` ? `cdn.contentful.com` : `preview.contentful.com`
      }
    },
    `gatsby-transformer-remark`,
  ]
}
