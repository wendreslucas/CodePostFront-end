import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../api/posts'
import { useNavigate } from 'react-router-dom'
import Modal from '@mui/material/Modal'
import moment from 'moment'
import { StylePosts } from './Main/StyleFormMain'
import Text from '../../components/Text/TextContent'
import User from '../../components/Text/User'
import Moment from '../../components/Text/Moment'
import Header from '../Header'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'
import Box from '@mui/material/Box'
import Subtitle from '../../components/Text/Subtitle'
import Label from '../../components/Text/Label'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 880,
  height: 480,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const ModalEdit = styled.div`
  border: 1px solid;
  width: 723px;
  padding-bottom: 10px;
  margin-bottom: 30px;

  .input {
    border-radius: 4px;
    border: 1px solid #777777;
    height: 28px;
    margin-left: 31px;
    margin-bottom: 19px;
    padding: 6px 0 6px 11px;
    /* width: ${props => props.size}; */
    width: 650px;
  }

  .textarea {
    border-radius: 4px;
    border: 1px solid #777777;
    margin-left: 31px;
    padding: 6px 0 6px 11px;
    resize: none;
    width: 650px;
    height: 55px;
    font-family: roboto;
  }

  .button {
    background: black;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    height: 33px;
    margin-top: 25px;
    margin-left: 570px;
    width: 111px;

    &:disabled {
      background: #777777;
    }
  }
`
const ModalDelete = styled.div`
  border: 1px solid;
  width: 661px;
  height: 168px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`
const pointer = {
  cursor: 'pointer',
  color: 'white'
}

const DviButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 18px;
`
const Btn = styled.button`
  border: 1px solid;
  background-color: #fff;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 33px;
  margin-top: 30px;
  margin-right: 16px;
  width: 111px;
`
const baseURL = 'http://localhost:5000/posts'

function Posts() {
  const navigate = useNavigate()
  const [post, setPost] = useState([])
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const [openEdit, setOpenEdit] = useState(false)
  const handleOpenEdit = () => setOpenEdit(true)
  const handleCloseEdit = () => setOpenEdit(false)

  const [openDelete, setOpenDelete] = useState(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  // function handleDelete() {
  //   api
  //     .delete(baseURL.id)
  //     .then(res => {
  //       console.log(res)
  //       handleCloseDelete()
  //     })
  //     .catch(err => console.log(err))
  //   navigate('/main')
  // }

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
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalEdit>
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
              // onClick
              disabled={!title || !content}
            >
              SAVE
            </button>
          </ModalEdit>
        </Box>
      </Modal>
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalDelete>
            <Subtitle subtitle="Are you sure you want to delete this item?" />
            <DviButtons>
              <Btn onClick={handleCloseDelete}>Cancel</Btn>

              <Btn onClick={handleDelete}>OK</Btn>
            </DviButtons>
          </ModalDelete>
        </Box>
      </Modal>
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

export default Posts
