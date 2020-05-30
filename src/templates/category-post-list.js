import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~components/seo'
import LayoutGlobal from '~layout/global'
import PostList from '~components/post-list'

export default function CategoryClassedList({ data }) {
  const category = data.contentfulCategory
  // Graphql data according to component props format
  const blogpost = []
  category.blogpost.forEach(post => {
    return blogpost.push({ node: { ...post } })
  })
  return (
    <div>
      <SEO
        title={`Category - ${category.name}`}
        description={`Linked ${category.name} category posts`}
        slug={`/category/${category.slug}`}
      />
      <LayoutGlobal>
        <h1>Category - { category.name }</h1>
        <PostList posts={blogpost} />
      </LayoutGlobal>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    contentfulCategory(slug: {eq: $slug}) {
      id
      name
      slug
      blogpost {
        id
        title
        slug
        publishDate(formatString: "YYYY-MM-DD")
        category {
          id
          name
          slug
        }
        tags {
          id
          name
          slug
        }
      }
    }
  }
`
