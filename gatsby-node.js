const path = require('path')

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

// Load Environment Variables
require('dotenv').config({
  path: `.env.${activeEnv}`
})

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~assets": path.resolve(__dirname, 'assets'),
        "~components": path.resolve(__dirname, 'src/components'),
        "~layout": path.resolve(__dirname, 'src/layout'),
        "~templates": path.resolve(__dirname, 'src/templates'),
        "~pages": path.resolve(__dirname, 'src/pages'),
        "~utils": path.resolve(__dirname, 'src/utils'),
      }
    }
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulCategory {
        edges {
          node {
            name
            id
            slug
          }
        }
      }
      allContentfulTags {
        edges {
          node {
            name
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
  }

  // Create BlogPost Page
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/post/${node.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.slug
      }
    })
  })

  // Create Post list at each categories.
  result.data.allContentfulCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/category/${node.slug}`,
      component: path.resolve(`./src/templates/category-post-list.js`),
      context: {
        slug: node.slug,
      }
    })
  })

  // Create Post list at each Tags.
  result.data.allContentfulTags.edges.forEach(({ node }) => {
    createPage({
      path: `/tag/${node.slug}`,
      component: path.resolve(`./src/templates/tag-post-list.js`),
      context: {
        slug: node.slug,
      }
    })
  })
}
