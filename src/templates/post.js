import React from 'react'
import { graphql } from 'gatsby'

export default function Article({ data }) {
  const postData = data.contentfulBlogPost
  return (
    <div>
      <h1>{ postData.title }</h1>
      <p><time dateTime={postData.publishDate}>{postData.publishDate}</time></p>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: postData.content.childMarkdownRemark.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost( slug: { eq: $slug } ) {
      id
      title
      publishDate(formatString: "YYYY-MM-DD")
      slug
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
