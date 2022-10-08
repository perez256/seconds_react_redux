import React, { Component } from "react";
import { CardMedia,  Typography,Button } from "@material-ui/core";
import { Card, Container } from "@mui/material";
import Swipeable from "react-swipy";
import { Users } from "./cardinfo";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


const appStyles = {
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "40vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};





const styles = {
	media: {
		paddingTop: '5%' // 16:9
	 },
	 card: {
		position: 'relative',
	 },
	 overlay: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		color: 'white',
		
	 }
};

// --- typing effect

const wrapperStyles = { position: "relative", width: "100%", height: "200px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

export default class SwipeCard extends Component { 
  state = {
    cards: ["First", "Second", "Third", 'Fourth'],
    users: [...Users]
  };

  remove = () =>
  this.setState(({ users }) => ({ users: users.slice(1, users.length) }));


  //  <Button onClick={left}>Reload</Button>

  render() {
    const { users } = this.state;
  return (
    <Container>
     
      <div  style={appStyles}>
      <div style={wrapperStyles}>
      {users.length > 0 && (
        <div style={wrapperStyles}>
         <Swipeable  buttons={({ right, left }) => (
          <div style={actionsStyles} >
            
            
            {/* <Button variant="contained" color="primary" xs={12}><a href='/'>Back</a></Button> */}
            <Container className="text-center">
            <Button  onClick={right} style={{ fontFamily:'Brush Script MT', background: '#F7EE21' }} ><SkipNextIcon /> </Button>
            <br/>
            </Container>
            
          </div>
        )}
        onAfterSwipe={this.remove}
        >
        <Card style={styles.card}>
        <CardMedia
              component="img"
              image={users[0].image}
              alt="1"
            />
            <div style={styles.overlay}>
              <Container>
            <Typography variant='h5' className='design1'>{users[0].title}</Typography>
            <h1 className='design2'>{users[0].description}</h1>
            </Container>
          
             
            </div>
          </Card>
        
            </Swipeable>
</div>


        )}
{users.length <= 0 &&  (
  <Container className="text-center" >
<Button variant="contained" style={{ background: '#ED1F26'}}><a href='/'><SkipPreviousIcon/> BACK</a></Button>
</Container>)}
     </div>
      </div>
    </Container>
  )
         }
}

