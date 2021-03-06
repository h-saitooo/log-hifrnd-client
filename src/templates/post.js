import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { DateTime } from 'luxon'

import LayoutGlobal from '~layout/global'
import SEO from '~components/seo'
import postStyles from './post.module.css'

const PostMeta = styled.div`
  margin-bottom: 2rem;
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
  font-size: .6rem;
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
  font-size: .8rem;
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

const Eyecatch = styled.figure`
  margin-right: -2rem;
  margin-left: -2rem;
`

export default function Article({ data }) {
  const postData = data.contentfulBlogPost
  const optimizedDate = DateTime.fromISO(postData.publishDate).toFormat('yyyy-MM-dd')
  return (
    <div>
      <SEO
        title={postData.title}
        description={postData.content.childMarkdownRemark.excerpt}
        slug={`/post/${postData.slug}`}
      />
      <LayoutGlobal>
        <PostMeta>
          <PostPublishDate><time dateTime={optimizedDate}>{optimizedDate}</time></PostPublishDate>
          <PostAttachment>
            <LinkLabel>Category:</LinkLabel><LinkItem><Link to={`/category/${postData.category.slug}`}>{postData.category.name}</Link></LinkItem>
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
        {(() => {
          if (postData.eyecatch !== null) {
            return (
              <Eyecatch>
                <img
                  src={postData.eyecatch.sizes.src}
                  alt={postData.eyecatch.title}
                />
              </Eyecatch>
            )
          }
        })()}
        <div className={postStyles.postBody} dangerouslySetInnerHTML={{ __html: postData.content.childMarkdownRemark.html }} />
      </LayoutGlobal>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost( slug: { eq: $slug } ) {
      id
      title
      publishDate
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
          excerpt(format: PLAIN, pruneLength: 120, truncate: true)
        }
      }
      eyecatch {
        id
        file {
          url
        }
        sizes {
          src
          srcSet
        }
        title
      }
    }
  }
`
