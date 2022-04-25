import React from 'react'
import { useAxios } from '../../hooks/useAxios'
import Post from '../Post'
import styled from 'styled-components'

function PostList() {
  const { data } = useAxios('posts')
  console.log(data)

  const DivMap = styled.div`
    display: flex;
    flex-direction: column-reverse;
  `

  return (
    <DivMap>
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
    </DivMap>
  )
}

export default PostList
