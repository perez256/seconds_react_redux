
import { Container } from '@material-ui/core'
import { TextField, Box,  Button,   } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function MarkettingForm() {
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
            <label> Name*</label>
            <input
                placeholder="Name"
                type="text"
                className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            </div>
      </Container>
  
      <Container>
      <div className="mb-1 sm:mb-2">
            <label>Contact*</label>
            <input
                placeholder="Contact"
                type="text"
                className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            </div>
        </Container>
 

      <Container>
      <div className="mb-1 sm:mb-2">
            <label>Address*</label>
            <input
                placeholder="Address"
                type="text"
                className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            </div>
        </Container>
      <br/>

      <Container>
      <Button variant="contained" fullWidth endIcon={<SendIcon />} >Send</Button>
        </Container>
        <br/>

    </Box>
  )
}

export default MarkettingForm