
import { Container } from '@material-ui/core'
import {  Box,  Button,  } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function FerryForm() {
  return (
    <Box
    className='formeffect'
      component="form"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
    >
        <br/>

       

        <Container>

            <div className="mb-1 sm:mb-2">
            <label>Addres From*</label>
            <input
                placeholder="Coming from?"
                type="text"
                className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            </div>
      </Container>
      <br/>
      <Container>
      <div className="mb-1 sm:mb-2">
            <label>Address To*</label>
            <input
                placeholder="Going to?"
                type="text"
                className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            </div>
        </Container>
      <br/>

      <Container>
      <div className="mb-1 sm:mb-2">
            <label>Date*</label>
            <input
                placeholder="Date"
                type="date"
                className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            </div>
        </Container>
      <br/>

      

      <Container>
      <Button variant="contained" fullWidth endIcon={<SendIcon />} >Confirm</Button>
        </Container>
        <br/>

    </Box>
  )
}

export default FerryForm