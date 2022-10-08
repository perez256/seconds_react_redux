import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/Actions/UserActions';
import { URLData } from '../../CONSTANTS/urlConstants';

// nested

function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    // perez
    const [business, setBusiness] = React.useState(null);
    // Nav bar state
    const userLogin = useSelector(state => state.userLogin);

    const {userInfo} = userLogin;
    const dispatch = useDispatch()
    const history = useHistory();

    const logoutHandler = () => {
      console.log('Logout');
      dispatch(logout());
      // localStorage.removeItem('userInfo');
      history.push("/login");
      
    }


    
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    // perez open & close code
    const handleOpenBusinessMenu = (event) => {
        setBusiness(event.currentTarget);
      };

      const handleCloseBusinessMenu = () => {
        setBusiness(null);
      };

    // end
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    let imageUrl = ''
    if(userInfo){
      imageUrl = `${URLData}${userInfo.avatar}`
    }
    
    
  return (
    <React.Fragment>
      
         <AppBar position="static" style={{background: 'black'}} position="sticky">
      <Container maxWidth="xl">

        <Toolbar disableGutters>
        <img src="./Seconds_logo.png" className="mr-3 h-6 sm:h-9" alt="Seconds Logo"/>
 

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            <Link to='/'> Seconds</Link>
          </Typography> 
    


            {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            
            >
              <MenuIcon />
            </IconButton>


            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'}, 
              }}
             
            >

                <MenuItem  onClick={handleCloseNavMenu}>
                <Link to="/" style={{color: 'black'}}><Typography textAlign="center">Home</Typography></Link>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                <Link to="/services" style={{color: 'black'}}><Typography textAlign="center">Services</Typography></Link>
                </MenuItem>


                <MenuItem  onClick={handleCloseNavMenu}>
                <Link to="/about" style={{color: 'black'}}><Typography textAlign="center">About</Typography></Link>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                <Link to="/business" style={{color: 'black'}}><Typography textAlign="center">Business</Typography></Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                <a href="https://marketing.secondsug.com" target="blank" style={{color: 'black'}}><Typography textAlign="center">Seconds Digital Marketing</Typography></a>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                <Link to="/ResearchLab"  style={{color: 'black'}}><Typography textAlign="center">Seconds Research Lab</Typography></Link>
                </MenuItem>
            </Menu> 
          </Box>
          

         
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <Link to='/'>Seconds</Link> 
          </Typography>
       
            {/* desktop */}
          <Box sx={{  display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }} >
               
                <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                <Link to="/services">Services</Link></Button>

                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to="/about">About</Link></Button>

                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to="/platform">Platform</Link></Button>


                   
                {/* business drop */}
                    <Tooltip title="Open Business">
              < Button sx={{ my: 2, color: 'white', display: 'block',  }}onClick={handleOpenBusinessMenu}>
              Business
              </Button>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }} style={{ width: 'auto'}}
              id="menu-appbarx"
              anchorEl={business}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(business)}
              onClose={handleCloseBusinessMenu}
            >
                <MenuItem onClick={handleCloseBusinessMenu}>
                  <Link to="/business" style={{color: 'black'}}><Typography textAlign="center">Business </Typography></Link>
                </MenuItem>


                <MenuItem onClick={handleCloseBusinessMenu}>
                <a href="https://marketing.secondsug.com" target='blank' style={{color: 'black'}}> <Typography textAlign="center">Seconds Digital marketing </Typography></a>
                </MenuItem>

                <MenuItem onClick={handleCloseBusinessMenu}>
                
                <Link to="/ResearchLab"  style={{color: 'black'}}>  <Typography textAlign="center">Seconds research Lab  </Typography> </Link>
                </MenuItem>
            </Menu>
          </Box>



          <Box sx={{ flexGrow: 0, marginLeft: 'auto'}}>
            
            { userInfo  ? (
                <>
                 <Tooltip title={userInfo.name}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userInfo ? <Avatar alt="User" src={imageUrl} />
                :
                 <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                }
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{userInfo.first_name} {userInfo.last_name} </Typography>
                </MenuItem> */}
           

            <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link to='/profile' style={{color: 'black'}}>
                  <AccountCircleOutlinedIcon /> Profile</Link></Typography>
                </MenuItem>
           

            <MenuItem onClick={handleCloseUserMenu}> 
                  {/* <Typography textAlign="center" style={{color: 'red'}}  ><LockIcon/>Logout</Typography> */}

                  <Button variant="outlined" startIcon={<LockIcon />} style={{color: 'black'}}  onClick={logoutHandler}>Logout</Button>
                </MenuItem>
                
            </Menu>


                </>

            ) :
            (
                <>
                <Button onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} variant='contained'>
                   <Link to='/login'>Login</Link> </Button> 
                </>

            )
            }
          </Box>


        </Toolbar>
      </Container>
    </AppBar>

    </React.Fragment>
  )
}

export default Nav