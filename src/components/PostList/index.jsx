import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useAxios } from '../../hooks/useAxios'
import Post from '../Post'

function PostList() {
  const { data } = useAxios('posts')

  return (
    <>
      {data?.posts?.map(post => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          content={post.content}
          username={post}
          created_datetime={post.created_datetime}
        />
      ))}
    </>
  )
}

export default PostList
