import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import api from '../../../api/posts'
import Label from '../../Text/Label'
import Subtitle from '../../Text/Subtitle'
import Header from '../../Header'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'
import Moment from '../../Text/Moment'
import Text from '../../Text/TextContent'
import User from '../../Text/User'
import moment from 'moment'
import { StyleFormCreate, StyleModal, StylePosts } from './StyleFormMain'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const pointer = {
  cursor: 'pointer',
  color: 'white'
}

const DviButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`

function FormMain() {
  const navigate = useNavigate()
  const { userName, setUserName } = useContext(UserContext)
  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [post, setPost] = useState([])

  const [openEdit, setOpenEdit] = useState(false)
  const handleOpenEdit = () => setOpenEdit(true)
  const handleCloseEdit = () => setOpenEdit(false)

  const [openDelete, setOpenDelete] = useState(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  function handleSubmit() {
    api
      .post(baseURL, {
        title,
        content,
        userName,
        created_datetime: new Date()
      })
      .then(res => {
        if (res.status === 200) {
          console.log('REDICRECTION avec status => ', res.status)
          window.location.replace = '/'
        }
      })
      .catch(err => console.log('Error: ', err))
  }

  useEffect(() => {
    api
      .get('/posts')
      .then(response => setPost(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return (
    <>
      <StyleFormCreate action="/" onSubmit={handleSubmit}>
        <Modal
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <StyleFormCreate>
              <Subtitle subtitle="Edit" />
              <Label bottom="13px" label="Title" />
              <input
                className="input"
                name="title"
                value={title}
                type="text"
                onChange={e => setTitle(e.target.value)}
                placeholder="Hello World"
              />
              <textarea
                className="textarea"
                name="content"
                value={content}
                type="text"
                onChange={e => setContent(e.target.value)}
                placeholder="Content Here"
                max={50000}
              />

              <button
                className="button"
                type="submit"
                onClick={handleSubmit}
                disabled={!title || !content}
              >
                SAVE
              </button>
            </StyleFormCreate>
          </Box>
        </Modal>

        <Modal
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <StyleFormCreate>
              <Subtitle subtitle="Are you sure you want to delete this item?" />
              <DviButtons>
                <button>Cancel</button>

                <button>OK</button>
              </DviButtons>
            </StyleFormCreate>
          </Box>
        </Modal>
        <Subtitle subtitle="What’s on your mind?" />
        <Label bottom="13px" label="Title" />
        <input
          className="input"
          name="title"
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
          placeholder="Hello World"
        />
        <Label bottom="7px" label="Content" />
        <textarea
          className="textarea"
          name="content"
          value={content}
          type="text"
          onChange={e => setContent(e.target.value)}
          placeholder="Content Here"
          max={50000}
        />

        <button
          className="button"
          type="submit"
          onClick={handleSubmit}
          disabled={!title || !content}
        >
          CREATE
        </button>
      </StyleFormCreate>

      {post.map(post => (
        <StylePosts>
          <div className="DivHeader" key={post?.id}>
            <Header size=" 723px" title={post?.title} />
            <div className="BackImagem">
              <DeleteForeverIcon sx={pointer} onClick={handleOpenDelete} />
              <ModeEditOutlineRoundedIcon
                sx={pointer}
                onClick={handleOpenEdit}
              />
            </div>
          </div>

          <div className="Info">
            <User user={post?.userName} />
            <Moment moment={moment(post?.created_datetime).fromNow()} />
          </div>
          <Text text={post?.content} />
        </StylePosts>
      ))}
    </>
  )
}

export default FormMain
