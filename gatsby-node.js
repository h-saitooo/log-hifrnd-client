const path = require('path')

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

// Load Environment Variables
require('dotenv').config({
  path: `.env.${activeEnv}`
})

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ContentfulBlogPost`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.slug,
    })
  }
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
    }
  `)

  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/post/${node.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.slug
      }
    })
  })
}
