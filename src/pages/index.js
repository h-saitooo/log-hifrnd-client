import React from 'react'
import { graphql } from 'gatsby'
import LayoutGlobal from '~layout/global'
import SEO from '~components/seo'
import PostList from '~components/post-list'

export default function Home({ data }) {
  return (
    <div>
      <LayoutGlobal>
        <SEO/>
        {(() => {
          if (data.allContentfulBlogPost.edges[0] !== null) {
            return <PostList posts={data.allContentfulBlogPost.edges} />
          }
        })()}
      </LayoutGlobal>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          category {
            name
            slug
          }
          tags {
            id
            name
            slug
          }
          publishDate
        }
      }
    }
  }
`
