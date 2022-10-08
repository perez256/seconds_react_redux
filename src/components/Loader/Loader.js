import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Loader() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress >Loading...</CircularProgress>
    </Box>
  )
}

export default Loader