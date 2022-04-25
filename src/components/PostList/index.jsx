import React from 'react'
import { useAxios } from '../../hooks/useAxios'
import Post from '../Post'

function PostList() {
  const { data } = useAxios('posts')
  console.log(data)

  return (
    <>
      {data?.posts?.map(post => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          content={post.content}
          username={post.userName}
          created_datetime={post.created_datetime}
        />
      ))}
    </>
  )
}

export default PostList
