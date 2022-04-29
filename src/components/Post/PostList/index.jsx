import React from 'react'
import { useAxios } from '../../../hooks/useAxios'
import Post from '../Post'
import styled from 'styled-components'

function PostList() {
  const { data } = useAxios('posts')

  const DivMap = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media (max-width: 768px) {
      max-width: 80%;
    }
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
