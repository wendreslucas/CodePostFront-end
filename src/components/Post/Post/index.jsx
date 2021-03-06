import React, { useContext } from 'react'
import { PostContext } from '../../../context/PostContext'
import { UserContext } from '../../../context/UserContext'
import HeaderPost from '../../Headers/HeaderPost'
import { StylePosts, AncorUser, AncorAvatar, AvatarDiv } from './style.js'
import User from '../../Text/User'
import Moment from '../../Text/Moment'
import Text from '../../Text/TextContent'
import moment from 'moment'
import Delete from '../../Icons/Delete'
import Edit from '../../Icons/Edit'
import { useAxios } from '../../../hooks/useAxios'

import Avatar from '@mui/material/Avatar'

const pointer = {
  cursor: 'pointer',
  color: 'white'
}

function Post({ id, title, content, username, created_datetime }) {
  const { handleEdit, handleDelete } = useContext(PostContext)
  const { userName } = useContext(UserContext)

  return (
    <StylePosts key={id}>
      <div className="DivHeader" key={id}>
        <HeaderPost title={title} />
        <div className="BackImagem">
          <Delete
            disabled={userName != username}
            onClick={() => handleDelete(id)}
          />
          <Edit
            disabled={userName != username}
            onClick={() => {
              handleEdit(id, title, content)
            }}
          />
        </div>
      </div>
      <div className="Info">
        <AvatarDiv>
          <AncorAvatar target="_blank" href={`https://github.com/${username}`}>
            <Avatar alt={username} src={`https://github.com/${username}.png`} />
          </AncorAvatar>
          <AncorUser target="_blank" href={`https://github.com/${username}`}>
            <User user={username} />
          </AncorUser>
        </AvatarDiv>

        <Moment moment={moment(created_datetime).fromNow()} />
      </div>
      <Text text={content} />
    </StylePosts>
  )
}

export default Post
