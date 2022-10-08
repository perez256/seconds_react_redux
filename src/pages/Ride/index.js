import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {  Card,  CardMedia, CardActionArea,  Container, Grid  } from '@mui/material';
import RideForm from './RideForm'





function Ride() {
    

    return (
        <>
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
							<div className='circle1' style={{marginTop: '-20px', marginLeft: '-30px'}}></div> 
							
								<Container>
								<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Get a Ride</h1>
								<br/>
								<Grid container space={2}>
									<Grid item xs={12} md={6} style={{ background: 'black',  height: '450px', }} >
									{/* form here */}
                                    <RideForm/>
									
								</Grid>
								<Grid item xs={12} md={6} >
									<br/><br/>
								<Card>
									<CardActionArea >
									<CardMedia className='box_shadow'
									component="img"
									alt="Contemplative Reptile"
									width="100%"
									height= '100%'
									image="./build_bridge.jpeg"
									title="Contemplative Reptile"
									/>
									</CardActionArea>
									</Card>
									
								</Grid>

								</Grid>
								
									
							<div className='circle1' style={{marginBottom: '-20px', marginRight: '-65px', float: 'right'}}></div> 
								</Container>
							
							</Container>
					</Grid>
					</Grid>
        </Container>
        </Container>
        <br/><br/>



        </section>

        </div>

        </>
       
    )
}

export default Ride;