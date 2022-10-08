import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container} from '@material-ui/core'
import {  Button,  Grid, Card,  } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { login } from '../../redux/Actions/UserActions';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';


function Login({location, history}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // validation
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [goodEmail, setGoodEmail] = useState(true);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);

  const [formIsvalid, setFormIsvalid] = useState(false);

  // touched

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  useEffect(() => {
    if ( enteredEmailIsValid && goodEmail && enteredPasswordIsValid) {
      setFormIsvalid(true);
    } else {
      setFormIsvalid(false);
    }
  }, [ enteredEmailIsValid,goodEmail , enteredPasswordIsValid]);

 
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

  // blur password  passwordBlur
  const passwordBlur = () => {
    if (password.trim() === ''){
      console.log('password required')
      setEnteredPasswordIsValid(false);
    }  
    else{
      setEnteredPasswordIsValid(true);
    }
  }



  // ---- redirects ---- 
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const dispatch = useDispatch();
  // here
  const userLogin = useSelector(state => state.userLogin)
  const {loading, userInfo,  error} = userLogin;


  useEffect(() => {
  
    if(userInfo) {
      history.push(redirect) ;
    } 

  }, [ history, userInfo, redirect,])

//  submit data
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === '' && password.trim() === ''){
      console.log('email and password are required')
      setEnteredEmailIsValid(false);
      setEnteredPasswordIsValid(false)
      return;
    } 

    setEnteredEmailIsValid(true);
    setEnteredPasswordIsValid(true)
    dispatch(login(email, password));
    console.log('submitted');
    
  }


// input classes
const emailvalidinput = enteredEmailIsValid ? "flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" 
:"flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline vv" 

const passwordvalidinput = enteredPasswordIsValid ? "flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" 
:"flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline vv" 


const formvalidity = formIsvalid ? 'v_form' :'b_form'
return (
  <>
    <Grid container space={2}>

    <Grid item xs={12} md={6} style={{backgroundColor: '#1976D2' }}>
      <Container style={{marginTop: '20%',  alignItems:'center', justifyContent:'center'}} >
      <img
      className=""
      style={{ width: '5%', margin: 'auto', color: 'black'}}
      src='./logo.PNG'
      alt=""
    />
    <br/>
    <h1 style={{textAlign: 'center', color: 'white'}}>
        <b>LOGIN</b></h1>
    <br/>
     
        <Card className='pglass'>
          <br/>

          {error && <Message severity='error' > Your email or password is invalid</Message>}
          {loading &&  <Loader />}

        <form onSubmit={submitHandler}>
          <br/>

        <Container>   
        <div className="mb-1 sm:mb-2">
        <label>Email*</label>
        <input
            autoFocus={true}
            type="email"
            id="email"
            value = {email}
            onBlur={emailBlur}
            required
            onChange={(e) => {setEmail(e.target.value)}}
            className={emailvalidinput}
        />
        {!enteredEmailIsValid && !email? <p className="error-text"><small>Email must not be empty.</small></p> : ''}
        {!goodEmail && email ? <p className="error-text"><small>Enter valid email address.</small></p>: ''}

        </div>
        </Container>
   
       
        <Container>
        <div className="mb-1 sm:mb-2">
        <label>Password* </label>
        <input
            type="password"
            value = {password}
            required
            onBlur={passwordBlur}
            onChange={(e) => {setPassword(e.target.value)}}
            className={passwordvalidinput}
        />
        {!enteredPasswordIsValid && <p className="error-text"><small>Password must not be empty.</small></p>}
        </div>
        </Container>
        <br/>

        <Container>
        <Button variant="contained" className={formvalidity} fullWidth endIcon={<SendIcon />} type='submit' disabled={!formIsvalid}> LOGIN </Button>
        </Container>
        <br/>
        </form>
     
     
          <div style={{textAlign: 'center'}}>
          {/* New Customer? <Link to={'/register'}>Signup</Link> */}
          </div>
          <br/>
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

export default Login;