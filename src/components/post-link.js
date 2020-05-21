import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ title, slug, tags, publishDate }) => {
  return (
    <div>
      <p><Link to={slug}>{ title }</Link></p>
      <ul>
        {tags.map(({ slug, name }) => (
          <li>
            <Link to={slug}>{name}</Link>
          </li>
        ))}
      </ul>
      <p>{ publishDate }</p>
    </div>
  )
}

export default PostLink
