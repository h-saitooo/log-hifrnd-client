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
    description: `Hi Friend. Might lifelog. Programming, Gadget, Music...`,
    author: 'Hiroki Saito',
    image: `/ogp.png`
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => ({
                title: edge.node.title,
                description: edge.node.content.childMarkdownRemark.excerpt,
                date: edge.node.publishDate,
                url: `${site.siteMetadata.siteUrl}/post/${edge.node.slug}`,
                guid: edge.node.id,
                custom_elements: [{ "content:encoded": edge.node.content.childMarkdownRemark.excerpt }],
              }))
            },
            query: `
              {
                allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
                  edges {
                    node {
                      id
                      title
                      slug
                      content {
                        childMarkdownRemark {
                          excerpt(format: PLAIN, pruneLength: 120, truncate: true)
                        }
                      }
                      publishDate(formatString: "YYYY-MM-DD")
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Log - Hifrnd RSS Feeds',
          }
        ],
      }
    },
  ]
}
