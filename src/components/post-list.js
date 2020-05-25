import React from 'react'
import PostLink from './post-link'

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(({ node }) => (
        <PostLink key={ node.id } {...node} />
      ))}
    </div>
  )
}

export default PostList
