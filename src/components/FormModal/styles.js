import styled from 'styled-components'

import { IoClose, IoCheckmark } from 'react-icons/io5'

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

// export const Container = styled.div`
//   background: #ffffff;
//   width: 100%;
//   height: 100%;
//   max-width: 400px;
//   max-height: 400px;
//   padding: 2em 3em;
//   box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
//   border-radius: 20px;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// export const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   width: 100%;
//   height: 40px;

//   color: #1e1e1e;
//   background-color: transparent;
//   padding: 0;
//   font-weight: 700;
//   font-size: 1.2em;

//   & > button {
//     max-height: 25px;
//     background: none;
//     border: none;
//     cursor: pointer;
//   }
// `;

// export const CloseIcon = styled(IoClose)`
//   height: 25px;
//   width: 25px;
// `;

// export const FormContainer = styled.form`
//   height: 100%;
//   width: 100%;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 15px;
// `;

// export const FormMain = styled.main`
//   margin: auto 0;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// export const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;

//   & > label {
//     font-size: 1.2em;
//     font-weight: 400;
//   }

//   & > input {
//     border: none;
//     color: #1e1e1e;
//     background-color: #f5f5f5;
//     border-radius: 5px;

//     height: 30px;
//     width: 100%;
//     padding-left: 10px;
//   }
// `;

// export const Footer = styled.footer`
//   display: flex;
//   justify-content: center;

//   & > button {
//     align-self: center;
//     background: #b4ecb4;
//     border: none;
//     border-radius: 6px;
//     width: 150px;
//     height: 35px;
//     font-weight: 700;
//     cursor: pointer;

//     transition: opacity 0.2s;
//   }

//   & > button:hover {
//     opacity: 0.5;
//   }
// `;

// export const CheckIcon = styled(IoCheckmark)`
//   color: white;
//   width: 2.4em;
//   height: 2.4em;
// `;

// const ModalEdit = styled.div`
//   border: 1px solid;
//   width: 723px;
//   padding-bottom: 10px;
//   margin-bottom: 30px;
//   .input {
//     border-radius: 4px;
//     border: 1px solid #777777;
//     height: 28px;
//     margin-left: 31px;
//     margin-bottom: 19px;
//     padding: 6px 0 6px 11px;
//     /* width: ${props => props.size}; */
//     width: 650px;
//   }
//   .textarea {
//     border-radius: 4px;
//     border: 1px solid #777777;
//     margin-left: 31px;
//     padding: 6px 0 6px 11px;
//     resize: none;
//     width: 650px;
//     height: 55px;
//     font-family: roboto;
//   }
//   .button {
//     background: black;
//     border: none;
//     color: white;
//     cursor: pointer;
//     font-size: 16px;
//     font-weight: 700;
//     height: 33px;
//     margin-top: 25px;
//     margin-left: 570px;
//     width: 111px;
//     &:disabled {
//       background: #777777;
//     }
//   }
// `
const ModalDelete = styled.div`
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
