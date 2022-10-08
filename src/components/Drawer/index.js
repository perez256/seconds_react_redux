
import { Avatar,  Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div sx={{background: 'black' }}> <Drawer open={openDrawer} onClose = {() => setOpenDrawer(false)} sx={{width: '250px'}}>
        <Link to="/" onClick ={()=> setOpenDrawer(false)}><Avatar alt="Seconds" src="./logo.png" sx={{background: 'black', marginTop: '20px', 
        marginBottom: '50px', marginLeft: '40%'}}/></Link>
      <br/>
        
            <List sx={{width: '250px', background: 'black', marginTop: '-50px'}}>
                <ListItemButton onClick ={()=> setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText><Link to='/services' > Services</Link></ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                <ListItemButton onClick ={()=> setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText><Link to='/about'>About</Link></ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                <ListItemButton onClick ={()=> setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText><Link to='/platform'>Platform</Link></ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                <ListItemButton onClick ={()=> setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText><Link to='/partner'>Partner</Link></ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                <ListItemButton onClick ={()=> setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText><Link to='/signup'>Signup</Link></ListItemText>
                    </ListItemIcon>
                </ListItemButton>



                </List>
        </Drawer>
        <IconButton onClick={()=> setOpenDrawer(!openDrawer)} 
        sx={{color: 'white', marginLeft: 'auto' }}  ><MenuIcon /></IconButton>
     
        </div>
  )
}

export default DrawerComp