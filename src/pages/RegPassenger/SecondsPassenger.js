import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core'
import {  Button,  Grid, Card   } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { passenger_register } from '../../redux/Actions/UserActions';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import { useHistory } from 'react-router-dom';


function SecondsPassenger() {
  const history = useHistory()

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState(''); 
  const [contact, setContact] = useState(''); 
  const [password, setPassword] = useState('');

  // validation
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [goodEmail, setGoodEmail] = useState(true);
  const [firstNameIsvalid, setFirstNameIsvalid] = useState(true);
  const [lastNameIsvalid, setLastNameIsvalid] = useState(true);
  const [contactIsvalid, setContactIsvalid] = useState(true);
  const [passwordIsvalid, setPasswordIsvalid] = useState(true);

  const [formIsvalid, setFormIsvalid] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  useEffect(() => {
    if ( enteredEmailIsValid && goodEmail && firstNameIsvalid && lastNameIsvalid &&  contactIsvalid && passwordIsvalid ) {
      setFormIsvalid(true);
    } else {
      setFormIsvalid(false);
    }
  }, [ enteredEmailIsValid,goodEmail , firstNameIsvalid, lastNameIsvalid, contactIsvalid, passwordIsvalid ]);

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

  const passwordBlur = () => {
    if (password.trim() === ''){
      setPasswordIsvalid(false);
    } 
    else{
      setPasswordIsvalid(true);
     
    }
  }





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

const formvalidity = formIsvalid ? 'v_form' :'b_form'

// dispatch
  const dispatch = useDispatch();
  const passengerRegForm = useSelector(state => state.passengerRegister)
  const {loading, userInfo,  error} = passengerRegForm;

  useEffect(() => {
    if(userInfo && first_name) {
      history.push('/') 
    } 

  }, [ history, userInfo, first_name])


  
  const submitPassengerHandler = (e) => {
    e.preventDefault();

    if (first_name && email && contact && password){
      dispatch(passenger_register(first_name, last_name, email, contact, password));
      console.log('submitted');
     
    } else{
      dispatch(passenger_register());
      console.log('Cant send blanks');
    }
   
  }


  
  return (
    <>
    <Grid container space={2}>

    <Grid item xs={12} md={6} style={{backgroundColor: '#1976D2' }}>
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
      <h1 style={{textAlign: 'center', color: 'white'}}>
        <b>Define your experience</b></h1>
      <br/>
     
        <Card className='pglass'>

        {error && <Message severity='error' > Something is wrong, please try again</Message>}
          {loading &&  <Loader />}
        
        <form onSubmit={submitPassengerHandler}>
          <br/>
          <h1 style={{textAlign: 'center'}}>Rides that find you everywhere.<br/>
            <small>Rides that take you anywhere </small></h1>

        <Container> 
        <div className="mb-1 sm:mb-2">
        <label>First Name*</label>
        <input
            placeholder="Enter first name"
            type="text"
            value = {first_name}
            onChange={(e) => {setFirst_name(e.target.value)}}
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
            onChange={(e) => {setLast_name(e.target.value)}}
            className={last_namevalidinput}
           
        />
        </div>
        {!lastNameIsvalid && !last_name? <p className="error-text"><small>Last name must not be empty.</small></p> : ''}
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
        <Button variant="contained" className={formvalidity} disabled={!formIsvalid} fullWidth endIcon={<SendIcon />} type="submit"> Send </Button>
        </Container>
        <br/>
        </form>

        </Card>
        <br/>
     

   
    </Container>
    </Grid>

    <Grid item xs={12} md={6}>
    <img
      className=" inset-0 opacity-1 object-cover h-[100vh]"
      src='./options.jpeg'
      alt=""

    />
      
    </Grid>
    </Grid>


    
</>

  )
}

export default SecondsPassenger