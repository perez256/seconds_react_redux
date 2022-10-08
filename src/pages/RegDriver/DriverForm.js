import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@material-ui/core'
import {  Button,  Grid, Card   } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import { useHistory } from 'react-router-dom';
import { driver_register } from '../../redux/Actions/UserActions';



function DriverForm() {
  const history = useHistory();

  // --- state ---
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState(''); 
  const [contact, setContact] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  // validation
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [goodEmail, setGoodEmail] = useState(true);
  const [firstNameIsvalid, setFirstNameIsvalid] = useState(true);
  const [lastNameIsvalid, setLastNameIsvalid] = useState(true);
  const [contactIsvalid, setContactIsvalid] = useState(true);
  const [passwordIsvalid, setPasswordIsvalid] = useState(true);
  const [confirmPasswordIsvalid, setconfirmPasswordIsvalid] = useState(true);

  const [formIsvalid, setFormIsvalid] = useState(false);

  // validate email
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // initial validate
  useEffect(() => {
    if ( enteredEmailIsValid && goodEmail && firstNameIsvalid && lastNameIsvalid &&  contactIsvalid && passwordIsvalid ) {
      setFormIsvalid(true);
    } else {
      setFormIsvalid(false);
    }
  }, [ enteredEmailIsValid,goodEmail , firstNameIsvalid, lastNameIsvalid, contactIsvalid, passwordIsvalid ]);
  
  // input classes
  const first_namevalidinput = firstNameIsvalid ? "flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" 
:"flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline vv" 

const last_namevalidinput = lastNameIsvalid ? "flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" 
:"flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline vv" 

const contactvalidinput = contactIsvalid ? "flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" 
:"flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline vv" 

const emailvalidinput = enteredEmailIsValid ? "flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" 
:"flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline vv" 



const passwordvalidinput = passwordIsvalid ? "flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" 
:"flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline vv" 



const confirmpasswordvalidinput = confirmPasswordIsvalid ? "flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" 
:"flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline vv" 

const formvalidity = formIsvalid ? 'v_form' :'b_form'

  // Blur config
  const firstNameBlur = () => {
    if (first_name.trim() === ''){
      setFirstNameIsvalid(false);
    } 
    else{
      setFirstNameIsvalid(true);
     
    }
  }

  const lastNameBlur = () => {
    if (last_name.trim() === ''){
      setLastNameIsvalid(false);
    } 
    else{
      setLastNameIsvalid(true);
     
    }
  }

  const contactBlur = () => {
    if (last_name.trim() === ''){
      setContactIsvalid(false);
    } 
    else{
      setContactIsvalid(true);
     
    }
  }

    // blur email
    const emailBlur = () => {
      if (email.trim() === ''){
        console.log('email  required')
        setEnteredEmailIsValid(false);
      }  else if(!isValidEmail(email.trim())) {
        setEnteredEmailIsValid(false);
        setGoodEmail(false);
      }
      else{
        setEnteredEmailIsValid(true);
        setGoodEmail(true);
      }
    }

    // password
    const passwordBlur = () => {
      if (password.trim() === ''){
        setPasswordIsvalid(false);
      } 
      else{
        setPasswordIsvalid(true);
       
      }
    }

    // confirm password
    const confirmPasswordBlur = () => {
      if (confirm_password.trim() === ''){
        setconfirmPasswordIsvalid(false);
      } 
      else{
        setconfirmPasswordIsvalid(true);
       
      }
    }

    // dispatch
  const dispatch = useDispatch();
  const driverRegForm = useSelector(state => state.driverRegister)
  const {loading, driverInfo,  error} = driverRegForm;

  useEffect(() => {
    if(driverInfo && first_name) {
      history.push('/') 
    } 

  }, [ history, driverInfo, first_name])




  
  const submitPassengerHandler = (e) => {
    e.preventDefault();

    if (first_name && email && contact && password){
      dispatch(driver_register(first_name, last_name, email, contact, password));
      console.log('submitted successfully');
     
    } else{
      dispatch(driver_register());
    }
   
  }
  


  
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
          <b>DRIVER SIGN UP</b></h1>
      <br/>
      
        <Card className='pglass'>
        <br/>
        {error && <Message severity='error' > Something is wrong, please try again</Message>}
          {loading &&  <Loader />}
        
        <form onSubmit={submitPassengerHandler}>
          <br/>

          <Container> 
        <div className="mb-1 sm:mb-2">
        <label>First Name*</label>
        <input
            placeholder="Enter first name"
            type="text"
            value = {first_name}
            onChange={(e) => {setFirstName(e.target.value)}}
            required
            onBlur={firstNameBlur}
            className={first_namevalidinput}    
        />
        </div>
        {!firstNameIsvalid && !first_name? <p className="error-text"><small>First name must not be empty.</small></p> : ''}
        </Container>


        <Container> 
        <div className="mb-1 sm:mb-2">
        <label>Last Name*</label>
        <input
            placeholder="Enter last name"
            type="text"
            required
            value = {last_name}
            onBlur={lastNameBlur}
            onChange={(e) => {setLastName(e.target.value)}}
            className={last_namevalidinput}
           
        />
        </div>
        {!lastNameIsvalid && !last_name? <p className="error-text"><small>Last name must not be empty.</small></p> : ''}
        </Container>


        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Contact*</label>
        <input
            placeholder="Enter contact"
            type="text"
            required
            value = {contact}
            onBlur={contactBlur}
            onChange={(e) => {setContact(e.target.value)}}
            className={contactvalidinput}
        />
        </div>
        {!contactIsvalid && !contact? <p className="error-text"><small>Contact must not be empty.</small></p> : ''}
        </Container>


        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Email*</label>
        <input
            placeholder="Enter email"
            type="email"
            value = {email}
            onBlur={emailBlur}
            onChange={(e) => {setEmail(e.target.value)}}
            className={emailvalidinput} 
        />
        </div>
        {!enteredEmailIsValid && !email? <p className="error-text"><small>Email must not be empty.</small></p> : ''}
        {!goodEmail && email ? <p className="error-text"><small>Enter valid email address.</small></p>: ''}
        </Container>

        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Password*</label>
        <input
            placeholder="Enter password"
            type="password"
            required
            value = {password}
            onChange={(e) => {setPassword(e.target.value)}}
            onBlur={passwordBlur}
            className={passwordvalidinput}
        />
        </div>
        {!passwordIsvalid && !password? <p className="error-text"><small>Password must not be empty.</small></p> : ''}
        </Container>

        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Confirm Password*</label>
        <input
            placeholder=" Confirm Password"
            type="password"
            value = {confirm_password}
            onChange={(e) => {setConfirmPassword(e.target.value)}}
            onBlur={confirmPasswordBlur}
            className={confirmpasswordvalidinput}
        />
        </div>
        {!confirmPasswordIsvalid && !confirm_password? <p className="error-text"><small>Confirm Password must not be empty.</small></p> : ''}
        </Container>
        <br/>

        <Container>
        <Button type="submit" variant="contained" className={formvalidity} disabled={!formIsvalid}  fullWidth endIcon={<SendIcon />} style={{ background: 'black'}}> Send </Button>
        </Container>
        <br/>
        </form>

        </Card>
        <br/>
     

   
    </Container>
    </Grid>

    <Grid item sx={12} md={6}>
    <img
      className=" inset-0 opacity-1 object-cover h-[114vh]"
      src='./less_time.jpeg'
      alt=""

    />
      
    </Grid>
    </Grid>


    
</>

  )
}

export default DriverForm