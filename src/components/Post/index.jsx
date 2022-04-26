import React, { useContext } from 'react'
import { PostContext } from '../../context/PostContext'
import Header from '../Header'
import { StylePosts } from './style.js'
import User from '../Text/User'
import Moment from '../Text/Moment'
import Text from '../../components/Text/TextContent'
import moment from 'moment'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'
import Zoom from '@mui/material/Zoom'

const pointer = {
  cursor: 'pointer',
  color: 'white'
}

function Post({ id, title, content, username, created_datetime }) {
  const { handleEdit, handleDelete } = useContext(PostContext)
  const [checked, setChecked] = React.useState(false)

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
        <User user={username} />
        <Moment moment={moment(created_datetime).fromNow()} />
      </div>
      <Text text={content} />
    </StylePosts>
  )
}

export default Post
