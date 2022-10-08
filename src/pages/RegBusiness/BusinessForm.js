import React from 'react'
import { Container } from '@material-ui/core'
import {  Button,  Grid, Card   } from '@mui/material'
import Link from '@mui/material/Link';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Seconds
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


function BusinessForm() {

  
  return (
    <>
    <Grid container space={2}>

    <Grid itemsx={12} md={6} sx={{backgroundColor: '#1976D2' }}>
      <Container style={{marginTop: '5%',  alignItems:'center', justifyContent:'center'}} >
      <img
      className=""
      style={{ width: '5%', margin: 'auto', color: 'black'}}
      src='./logo.PNG'
      alt=""
    />
    <br/>
    <h1 style={{textAlign: 'center', color: 'white'}}>
        <b>SIGNUP</b></h1>
    <br/>
    
        <Card className='pglass'>
        
        <form>
          <br/>

        <Container>
          
        <div className="mb-1 sm:mb-2">
        <label>Business Name*</label>
        <input
            placeholder="Business name"
            type="text"
            className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        </div>
        </Container>
       
        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Username*</label>
        <input
            placeholder="Username"
            type="text"
            className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        </div>
        </Container>
       

        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Email*</label>
        <input
            placeholder="Email"
            type="email"
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
        <label>Location </label>
        <input
            placeholder="Location"
            type="text"
            className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        </div>
        </Container>
    

        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Password*</label>
        <input
            placeholder="Password"
            type="password"
            className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        </div>
        </Container>
       

        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Confirm Password*</label>
        <input
            placeholder="Confirm Password"
            type="password"
            className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        </div>
        </Container>
        <br/>

     

        <Container>
        <Button variant="contained" fullWidth endIcon={<SendIcon />} style={{ background: 'black'}}> Send </Button>
        </Container>
        <br/>
        </form>

        </Card>
        <br/>
     

   
    </Container>
    </Grid>

    <Grid item sx={12} md={6}>
    <img
      className=" inset-0 opacity-1 object-cover h-[113vh]"
      src='./less_time.jpeg'
      alt=""

    />
      
    </Grid>
    </Grid>


    
</>

  )
}

export default BusinessForm