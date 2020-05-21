import React from 'react'
import { graphql } from 'gatsby'
import GlobalLayout from '../layout/global'
import PostList from '../components/post-list'

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <GlobalLayout>
        <h1>Hello from Gatsby</h1>
        <PostList posts={data.allContentfulBlogPost.edges} />
      </GlobalLayout>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          contentful_id
          id
          title
          slug
          category {
            name
            slug
          }
          tags {
            name
            slug
          }
          publishDate
        }
      }
    }
  }
`
