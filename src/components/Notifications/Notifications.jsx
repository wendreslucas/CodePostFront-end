// import React, { useState } from 'react'
// import Alert from '@mui/material/Alert'
// import Stack from '@mui/material/Stack'
// import { makeStyles } from '@material-ui/core'
// import Snackbar from '@mui/material/Snackbar'
// import { Collapse } from '@mui/material'
// import IconButton from '@mui/material/IconButton'
// import CloseIcon from '@mui/icons-material/Close'
// import AlertTitle from '@mui/material/AlertTitle'

// const useStyles = makeStyles(theme => ({
//   root: {
//     top: theme.spacing(9)
//   }
// }))

// function Notification(props) {
//   const { notify, setNotify } = props
//   const classes = useStyles()

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return
//     }
//     setNotify({
//       ...notify,
//       isOpen: false
//     })

//     return (
//       <Snackbar
//         className={classes.root}
//         open={notify.isOpen}
//         autoHideDuration={3000}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         onClose={handleClose}
//       >
//         <Alert severity={notify.type} onClose={handleClose}>
//           {notify.message}
//         </Alert>
//       </Snackbar>
//     )
//   }
// }

// export default Notification
