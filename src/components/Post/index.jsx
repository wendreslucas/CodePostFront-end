import React, { useState, useContext, useEffect } from 'react'
import { PostContext } from '../../context/PostContext'
import { UserContext } from '../../context/UserContext'
import Header from '../Header'
import { StylePosts } from './style.js'
import User from '../Text/User'
import Moment from '../Text/Moment'
import Text from '../../components/Text/TextContent'
import moment from 'moment'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'

const pointer = {
  cursor: 'pointer',
  color: 'white'
}

function Post({ id, title, content, autor, created_datetime }) {
  const { userName } = useContext(UserContext)
  const { handleEdit, handleDelete } = useContext(PostContext)
  return (
    <StylePosts key={id}>
      <div className="DivHeader" key={id}>
        <Header size=" 723px" title={title} />
        <div className="BackImagem">
          <DeleteForeverIcon sx={pointer} onClick={() => handleDelete(id)} />
          <ModeEditOutlineRoundedIcon
            sx={pointer}
            onClick={() => {
              handleEdit(id, title, content)
            }}
          />
        </div>
      </div>
      <div className="Info">
        <User user={userName} />
        <Moment moment={moment(created_datetime).fromNow()} />
      </div>

      <Text text={content} />
    </StylePosts>
  )
}

export default Post
