import { Container } from '@material-ui/core'
import { Alert } from '@mui/material'
import React from 'react'

function Message({severity, children}) {
  return (
    <Container sx={{marginTop: '10px'}}>
    <Alert severity={severity}>{children}</Alert>
    </Container>
  )
}

export default Message