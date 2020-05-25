import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const PostItem = styled.div`
  padding: 1.8rem 0;
  border-bottom: 2px solid var(--color-border);
  &:first-of-type {
    border-top: 2px solid var(--color-border);
  }
`

const PostTitle = styled.h2`
  margin: 0;
  a {
    color: var(--color-heading);
    &:hover {
      color: var(--color-hero);
    }
  }
`

const PostPublishDate = styled.p`
  margin-bottom: .7rem;
  font-size: .8rem;
  time {
    padding-bottom: .15em;
    border-bottom: 2px solid var(--color-border);
  }
`

const LinkList = styled.ul`
  margin: .7rem 0 0;
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
    color: var(--color-text);
    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--color-hero);
    }
  }
`

const PostLink = ({ title, slug, tags, publishDate }) => {
  return (
    <PostItem>
      <PostPublishDate><time>{ publishDate }</time></PostPublishDate>
      <PostTitle><Link to={`/post/${slug}`}>{ title }</Link></PostTitle>
      <LinkList>
        {tags.map(({ slug, name, id }) => (
          <LinkItem key={ id }>
            <Link to={`/tag/${slug}`}>{name}</Link>
          </LinkItem>
        ))}
      </LinkList>
    </PostItem>
  )
}

export default PostLink
