import { createContext, useState, useContext } from 'react'
import { UserContext } from './UserContext'
import ModalEdit from '../components/Modal/ModalEdit'
import ModalDelete from '../components/Modal/ModalDelete'
import Delete from '../components/Icons/Delete'
import { useAxios } from '../hooks/useAxios'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export const PostContext = createContext()

export function PostContextProvider({ children }) {
  const navigate = useNavigate()
  const { data, mutate } = useAxios('posts')
  const { userName, setUserName } = useContext(UserContext)
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [id, setId] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const post = {
      title,
      content,
      userName
    }

    if (id) {
      api.put(`posts/${id}`, post)
      const updatedPosts = {
        posts: data.posts?.map(post => {
          if (post._id === id) {
            return {
              ...post,
              title,
              content
            }
          }
          return post
        })
      }
      setInterval(handleClose, 1000)
      mutate(updatedPosts, false)
    } else {
      api.post('posts', post)

      const updatedPosts = {
        posts: [...data.posts, post]
      }

      mutate(updatedPosts, false)
    }

    if (title) {
      setTitle('')
    }
    if (content) {
      setContent('')
    }
  }

  function handleDelete(id) {
    api.delete(`posts/${id}`)
    const updatedPosts = {
      posts: data.posts?.filter(post => post._id !== id)
    }
    navigate('/posts')
    mutate(updatedPosts, false)
  }

  function handleEdit(postId, postTitle, postContent) {
    setOpenModalEdit(true)
    setTitle(postTitle)
    setContent(postContent)
    setId(postId)
  }

  function OpenDelete() {
    setOpenModalDelete(true)
  }

  function CloseDelete() {
    setOpenModalDelete(false)
  }

  function handleClose() {
    if (title) {
      setTitle('')
    }
    if (content) {
      setContent('')
    }
    setOpenModalEdit(false)
  }

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleContent(e) {
    setContent(e.target.value)
  }

  return (
    <PostContext.Provider
      value={{
        handleClose,
        handleTitle,
        handleContent,
        handleEdit,
        handleSubmit,
        handleDelete,
        OpenDelete,
        CloseDelete,
        title,
        setTitle,
        content,
        setContent,
        id,
        setId
      }}
    >
      {children}

      {openModalEdit && <ModalEdit />}
      {openModalDelete && <ModalDelete />}
    </PostContext.Provider>
  )
}
