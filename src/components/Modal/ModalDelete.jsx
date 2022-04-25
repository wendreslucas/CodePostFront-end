import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../api/posts'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

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

const ModDelete = styled.div`
  border: 1px solid;
  width: 661px;
  height: 168px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`
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

function Delete() {
  const [openDelete, setOpenDelete] = useState(false)
  const handleOpenDelete = () => setOpenDelete(true)
  const handleCloseDelete = () => setOpenDelete(false)

  function deletePost(id) {
    api.delete(`/posts/${id}`).then(res => {
      setPosts(posts.filter(posts => posts.id !== id))
      handleCloseDelete()
    })
  }

  return (
    <Modal
      open={openDelete}
      onClose={handleCloseDelete}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModDelete>
          <Subtitle subtitle="Are you sure you want to delete this item?" />
          <DviButtons>
            <Btn onClick={handleCloseDelete}>Cancel</Btn>
            <Btn
              onClick={() => {
                deletePost(posts.id)
              }}
            >
              OK
            </Btn>
          </DviButtons>
        </ModDelete>
      </Box>
    </Modal>
  )
}

export default Delete
