// import { Container } from '@material-ui/core';
// import { AppBar, Toolbar, Button, Tabs, Tab, Typography, useMediaQuery, useTheme  } from '@mui/material'
// import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
// import DrawerComp from '../Drawer';

// // nested



// function Nav() {
//     const [value, setValue] = useState();
//     const theme = useTheme();
//     // console.log(theme);
//     const isMatch = useMediaQuery(theme.breakpoints.down('md'));
//     console.log(isMatch);

//     // --- nested
   
    
//   return (
//     <React.Fragment>
//         <AppBar sx={{background: 'black'}}>
//         <Toolbar>
//         <span><Link to="/"><img src="./logo.png" className="mr-3 h-6 sm:h-9" alt="Seconds Logo"></img></Link>
//             </span>
//             <span><Link to="/"><Typography variant="h5">Seconds</Typography></Link></span>
//             {
//                 isMatch ? (
//                     <>
            
//                         <DrawerComp />
//                     </>
//                 ) :(
//                     <>
//                     <Tabs textColor='inherit' value={value}  onChange= {(e, value) => setValue(value)} indicatorColor='primary' sx={{marginLeft: 'auto'}} >
//                     <Link to="/services"><Tab label='Services'/></Link>
//                     <Link to="/about"><Tab label='About'/></Link>
//                     <Link to="/platform"><Tab label='Platform'/></Link>
//                     <Link to="/partner"><Tab label='Partner'/></Link>

//                     {/* nested */}
                   
                   
              
//                     </Tabs>
                           
//                         <Button sx={{marginLeft: 'auto'}} variant='contained'><Link to="/signup">Signup</Link></Button>
                  
//                     </>

//                 )
//             }
//             </Toolbar>
//         </AppBar>

//     </React.Fragment>
//   )
// }

// export default Nav