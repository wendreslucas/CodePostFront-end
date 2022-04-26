import { createContext, useState, useContext } from 'react'
import { UserContext } from './UserContext'
import FormModal from '../components/FormModal'
import { useAxios } from '../hooks/useAxios'
import api from '../services/api'

export const PostContext = createContext()

export function PostContextProvider({ children }) {
  const { data, mutate } = useAxios('posts')
  const { userName, setUserName } = useContext(UserContext)

  const [openFormModal, setOpenFormModal] = useState(false)
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

  function handleEdit(postId, postTitle, postContent) {
    setTitle(postTitle)
    setContent(postContent)
    setId(postId)

    setOpenFormModal(true)
  }

  function handleDelete(id) {
    api.delete(`posts/${id}`)

    const updatedPosts = {
      posts: data.posts?.filter(post => post._id !== id)
    }

    mutate(updatedPosts, false)
  }

  function handleClose() {
    if (title) {
      setTitle('')
    }
    if (content) {
      setContent('')
    }
    setOpenFormModal(false)
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
        title,
        setTitle,
        content,
        setContent,
        id,
        setId
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </PostContext.Provider>
  )
}
