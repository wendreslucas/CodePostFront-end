import React, { useContext, useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import styled from 'styled-components'
import api from '../../api/posts'
import Label from '../Text/Label'
import Subtitle from '../Text/Subtitle'
import Header from '../Header'
import Delete from '../icons/Delete'
import Edit from '../icons/Edit'
import Moment from '../Text/Moment'
import Text from '../Text/TextContent'
import User from '../Text/User'
import moment from 'moment'

const baseURL = 'http://localhost:5000/posts'

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #777777;
  height: 28px;
  margin-left: 31px;
  margin-bottom: 19px;
  padding: 6px 0 6px 11px;
  /* width: ${props => props.size}; */
  width: 650px;
`
const StyleTextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid #777777;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  resize: none;
  width: 650px;
  height: 55px;
  font-family: roboto;
`
const StyleButton = styled.button`
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
`
const StyleForm = styled.form`
  border: 1px solid;
  width: 723px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`
const StylePosts = styled.div`
  border: 1px solid;
  width: 723px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`
const BackImagem = styled.div`
  background: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 190px;
`
const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const DivInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const FormCreate = () => {
  const navigate = useNavigate()
  const { userName, setUserName } = useContext(UserContext)
  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [post, setPost] = useState([])
  const [titleEdit, setTitleEdit] = useState('')
  const [contentEdit, setContentEdit] = useState('')
  const [indexEdit, setIndexEdit] = useState(0)
  const [modalEditIsVisible, setModalEditIsVisible] = useState(false)
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false)

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
      <StyleForm action="/" onSubmit={handleSubmit}>
        <Modal
          isOpen={modalEditIsVisible}
          onRequestClose={() => setModalEditIsVisible(false)}
          style={{}}
        >
          <Subtitle subtitle="What’s on your mind?" />
          <Label bottom="13px" label="Title" />
          <Input
            name="title"
            value={title}
            type="text"
            onChange={e => setTitle(e.target.value)}
            placeholder="Hello World"
          />
          <Label bottom="7px" label="Content" />
          <StyleTextArea
            name="content"
            value={content}
            type="text"
            onChange={e => setContent(e.target.value)}
            placeholder="Content Here"
            max={50000}
          />

          <StyleButton
            type="submit"
            onClick={handleSubmit}
            disabled={!title || !content}
          >
            CREATE
          </StyleButton>
        </Modal>
      </StyleForm>

      {post.map(post => (
        <StylePosts>
          <DivHeader key={post?.id}>
            <Header size=" 723px" title={post?.title} />
            <BackImagem>
              <Delete />
              <Edit />
            </BackImagem>
          </DivHeader>

          <DivInfo>
            <User user={post?.userName} />
            <Moment moment={moment(post?.created_datetime).fromNow()} />
          </DivInfo>
          <Text text={post?.content} />
        </StylePosts>
      ))}
    </>
  )
}

export default FormCreate
