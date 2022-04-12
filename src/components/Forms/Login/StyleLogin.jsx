import React from 'react'
import styled from 'styled-components'

export const StyleImage = styled.div`
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
export const StyleForm = styled.form`
  border: 1px solid #777777;
  height: 220px;
  width: 500px;

  .input {
    border-radius: 4px;
    border: 1px solid #777777;
    height: 28px;
    margin-left: 31px;
    padding: 6px 0 6px 11px;
    width: 444px;
  }

  .btn {
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
  }
`
export const StyleModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 24px;
`
