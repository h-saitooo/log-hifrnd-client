import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import LayoutGlobal from '~layout/global'

const PostMeta = styled.div`
  margin-bottom: 3rem;
`

const PostTitle = styled.h1`
  margin-top: .8rem;
  margin-bottom: 0;
  a {
    color: var(--color-heading);
    &:hover {
      color: var(--color-hero);
    }
  }
`

const PostPublishDate = styled.p`
  margin-bottom: .5rem;
  font-size: .8rem;
  time {
    padding-bottom: .15em;
    border-bottom: 2px solid var(--color-border);
  }
`

const PostAttachment = styled.div`
  margin: 0;
`

const LinkLabel = styled.p`
  display: inline-block;
  margin: 0 .5rem 0 0;
  font-size: 0.8rem;
  color: var(--color-text-pale);
`

const LinkList = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
`

const LinkItem = styled.li`
  display: inline-block;
  margin: 0 0 0 1rem;
  padding: 0;
  &:first-of-type {
    margin: 0;
  }
  a {
    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--color-hero);
    }
  }
`

export default function Article({ data }) {
  const postData = data.contentfulBlogPost
  return (
    <div>
      <LayoutGlobal>
        <PostMeta>
          <PostPublishDate><time dateTime={postData.publishDate}>{postData.publishDate}</time></PostPublishDate>
          <PostAttachment>
            <LinkLabel>Category:</LinkLabel><LinkItem><Link to={`/tag/${postData.category.slug}`}>{postData.category.name}</Link></LinkItem>
          </PostAttachment>
          <PostAttachment>
            <LinkLabel>Tags:</LinkLabel>
            <LinkList>
              {postData.tags.map(({ slug, name, id }) => (
                <LinkItem key={ id }>
                  <Link to={`/tag/${slug}`}>{name}</Link>
                </LinkItem>
              ))}
            </LinkList>
          </PostAttachment>
          <PostTitle>{ postData.title }</PostTitle>
        </PostMeta>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: postData.content.childMarkdownRemark.html }} />
      </LayoutGlobal>
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
        id
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
