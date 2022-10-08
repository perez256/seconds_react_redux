import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Container, Grid, Box, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getUserDetails, updateUserProfile } from '../../redux/Actions/UserActions';
import { USER_UPDATE_PROFILE__RESET } from '../../redux/Constants/UserConstants';
import { URLData } from '../../CONSTANTS/urlConstants';


function Profile({location, history}) {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState(''); 
  const [contact, setContact] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // dispatch
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails)
  const {loading, user,  error} = userDetails;
 
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin;

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const {success} = userUpdateProfile;


  useEffect(() => {
    if(!userInfo) {
      history.push('/login') 
    } else {
        if(!userInfo || !userInfo.first_name || success){
          dispatch({
            type: USER_UPDATE_PROFILE__RESET
          })
        dispatch(getUserDetails(userInfo.id))
        } else {
          console.log('id', userInfo.id);

            setFirst_name(userInfo.first_name);
            setLast_name(userInfo.last_name);
            setEmail(userInfo.email);
            setContact(userInfo.contact); 
        }
    }

  }, [ history, user, dispatch, userInfo, success])


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');

    // if (password !== confirmPassword){
    //   setMessage('Passwords do not match')

    // } else{
      console.log('Updating data', userInfo.id);
      dispatch(updateUserProfile({
        'id': userInfo.id,
        'first_name': first_name,
        'last_name': last_name,
        'name': first_name +  ' ' + last_name,
        'contact': contact,
        'email': userInfo.email,
        password : password,

      }));
    // }
   
  }
  const imageUrl = `${URLData}${userInfo.avatar}`

  return (
    <div>
         <section>
        <img
          className="inset-0 object-cover w-full h-[500px]"
          src="./about_img.jpeg"
          alt="" />

        <Container  style={{border: '1px solid rgba(255, 255, 255, 0.14)' }}>
        <Container>
        <Grid container  style={{marginTop: '-70px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
        <Grid item xs={12} md={12} style={{ background: 'black',  height: 'auto', }} >
        <Container className='pglass shadow1' style={{height: '100%'}}>
        {/* <div className='circle1' style={{marginTop: '-20px', marginLeft: '-30px'}}></div>  */}
        <br/>
       
        <h1 style={{color: 'white', textAlign: 'center', fontSize: '19px'}}>YOUR ACCOUNT </h1>
        <br/>
        <hr/>
        <br/>
        <Grid container space={2}>
            <Grid item xs={12} md={5} >
            <br/> <br/> <br/> 
            <Box
                className='formeffect'
                
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                    marginBottom: '10px',
                    marginLeft: 'auto'
                }}
                noValidate
                autoComplete="off"
                >
    


    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'black[500]' }} aria-label="recipe">
            S
          </Avatar>
        }
      
        title={userInfo.first_name + ' ' + userInfo.last_name}
        subheader={userInfo.contact}
      />
      {imageUrl ? 
       <CardMedia
       component="img"
       height="194"
       image={imageUrl}
       alt="Upload Picture"
     />
     :
     <p>Upload your Profile Photo</p>
    
      }
     
      <CardActions disableSpacing>
        <IconButton aria-label="Update Photo" title='Update Photo'>
          <CloudUploadIcon />
        </IconButton>
      
      </CardActions>
      
    </Card>





                </Box>

            </Grid>

         
            <Grid item xs={12} md={7} >
            <Box
                className='formeffect'
                component="form"
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                }}
                noValidate
                autoComplete="off"
                onSubmit={submitHandler}
                >
                    <br/>
           
                <Container>
                    <div className="mb-1 sm:mb-2">
                    <label>First Name</label>
                    <input
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                        className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    </div>
                </Container>

                <Container>
                    <div className="mb-1 sm:mb-2">
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                        className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    </div>
                </Container>

                <Container>
                    <div className="mb-1 sm:mb-2">
                    <label>Contact</label>
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    </div>
                </Container>

                <Container>
                    <div className="mb-1 sm:mb-2">
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    </div>
                </Container>
                <hr/>

                <Container>
                    <div className="mb-1 sm:mb-2">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    </div>
                </Container>

                <Container>
                    <div className="mb-1 sm:mb-2">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    </div>
                </Container>
                <hr/>

                <br/>

                <Container>
                <Button type='submit' variant="contained" fullWidth endIcon={<SendIcon />} >Update</Button>
                    </Container>
                    <br/>

                

            </Box>
            <br/>

            </Grid>



        </Grid>
<hr/>
<br/>
        </Container>
        </Grid>
        </Grid>

        </Container>
        </Container>

</section>
<br/> <br/>
    </div>
  )
}

export default Profile