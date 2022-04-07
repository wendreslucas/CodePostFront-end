import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Label from '../Text/Label'
import Subtitle from '../Text/Subtitle'
import Modal from 'react-modal'
import Image from 'next/image'

const StyleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageContainer = styled.div`
  top: 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
`
const StyleForm = styled.div`
  border: 1px solid #777777;
  height: 220px;
  width: 500px;
`
const StyleInput = styled.input`
  border-radius: 4px;
  border: 1px solid #777777;
  height: 28px;
  margin-left: 31px;
  padding: 6px 0 6px 11px;
  width: 444px;
`
const StyleButton = styled.button`
  background: black;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 33px;
  margin-top: 30px;
  margin-left: 364px;
  width: 111px;

  &:disabled {
    background: #777777;
  }
`
function handleLogin() {
  console.log('Enter')
}

const FormLogin = () => {
  const [name, setName] = useState()
  const [post, setPost] = useState('')
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <ImageContainer>
        <a>
          <Image
            onClick={() => setOpenModal(true)}
            src="/codeleap_logo_black.png"
            alt="CodeLeap Logo"
            width="608"
            height="167"
          />
        </a>

        <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
          <StyleModal>
            <StyleDiv>
              <StyleForm>
                <Subtitle subtitle="Welcome to CodeLeap network!" />
                <Label margin="13px" label="Please enter your username" />

                <StyleInput
                  placeholder="Username"
                  type="text"
                  onChange={e => setName(e.target.value)}
                  value={post?.username}
                />
                <StyleButton onClick={handleLogin} disabled={!name}>
                  ENTER
                </StyleButton>
              </StyleForm>
            </StyleDiv>
          </StyleModal>
        </Modal>
      </ImageContainer>
    </>
  )
}

export default FormLogin
