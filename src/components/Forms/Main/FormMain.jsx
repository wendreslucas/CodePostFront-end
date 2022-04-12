import React, { useContext, useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import api from '../../../api/posts'
import Label from '../../Text/Label'
import Subtitle from '../../Text/Subtitle'
import Header from '../../Header'
import Delete from '../../icons/Delete'
import Edit from '../../icons/Edit'
import Moment from '../../Text/Moment'
import Text from '../../Text/TextContent'
import User from '../../Text/User'
import moment from 'moment'
import { StyleEdit, StyleFormCreate, StyleModal, StylePosts } from './StyleMain'

const FormMain = () => {
  const navigate = useNavigate()
  const { userName, setUserName } = useContext(UserContext)
  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [post, setPost] = useState([])
  const [titleEdit, setTitleEdit] = useState('')
  const [contentEdit, setContentEdit] = useState('')
  // const [indexEdit, setIndexEdit] = useState(0)
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
      <StyleFormCreate action="/" onSubmit={handleSubmit}>
        <Modal
          isOpen={modalEditIsVisible}
          onRequestClose={() => setModalEditIsVisible(false)}
        >
          <StyleModal>
            <h1>Editar</h1>
          </StyleModal>
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
              <Delete
                onClick={() => {
                  console.log('clicou')
                  setModalDeleteIsVisible(true)
                }}
              />
              <Edit
                onClick={() => {
                  console.log('clicou')
                  setModalEditIsVisible(true)
                }}
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
