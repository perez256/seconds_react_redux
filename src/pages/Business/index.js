import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, CardMedia, CardActionArea,  Container, Grid, Paper, Typography } from '@mui/material';
import Footer from '../../components/Footer'
import PartnerForm from '../../components/SecondForms/PartnerForm';
// import QRCode from "react-qr-code";
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles({
	root: {
	  maxWidth: 250,
	},
  });

function Business() {
	const classes = useStyles();
	return (
		<>
			<div>
				<section>
					<img
						className="inset-0 object-cover w-full h-[500px]"
						src="./about_img.jpeg"
						alt="" />

	
			{/* backgroundImage: 'url("./bg1.PNG")' */}
			<Container  style={{border: '1px solid rgba(255, 255, 255, 0.14)' }}>
				{/* values */}
				<Container>
				<Grid container  style={{marginTop: '-70px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} data-aos="fade-up" data-aos-duration="1000" >
				<Grid item xs={12} md={12} style={{ background: 'black',  height: 'auto', }} >

				<Container className='pglass shadow1' style={{height: '100%'}}>
							<div className='circle1' style={{marginTop: '-20px', marginLeft: '-30px'}}></div> 
							
								<Container>
								<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Partner with us today </h1>
								<br/>
								<Grid container space={2}>
									<Grid item xs={12} md={6} style={{ background: 'black',  height: '450px', }} >
									<PartnerForm />
									
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


				



				{/* at 1600 km */}
				<Container data-aos="fade-up" data-aos-duration="1000" >
					<Grid container  style={{ marginTop: '70px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
					<Grid item xs={12} md={12} style={{ background: 'black',  height: 'auto', }} >
						
						<Container className='pglass shadow1' style={{height: '100%'}}>
						<div className='circle' style={{marginTop: '-20px', marginLeft: '-30px'}}></div> 
						<div className='circle' style={{marginTop: '-50px', marginRight: '-35px', float: 'right'}}></div> 
							<Container>
							<h1 style={{color: 'white', textAlign: 'center', fontSize: '19px'}}>At 1600 km per rotational Earth speed,  3600 seconds ticking every hour, 
							You can’t feel the Earth’s motion because speed is consistent.</h1>
							<br/>

							<p style={{color: 'white', textAlign: 'center'}}> <span style={{color: '#6FC6A5'}}>Seconds</span> a growing global network platform of 2.7 million users that Designs, Markets & 
								Operates a mobile platform along providing technology as a service.</p>

								<div className='circle' style={{marginBottom: '-45px', marginLeft: '-60px'}}></div> 
						<div className='circle' style={{marginBottom: '-20px', marginRight: '-65px', float: 'right'}}></div> 
							</Container>
						
						</Container>
					</Grid>
					</Grid>
				</Container>

				{/* why us */}
				<Container>
					<Grid container  style={{marginTop: '70px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
					<Grid item xs={12} md={12} style={{ background: 'black',  height: 'auto', }} >

					<Container className='pglass shadow1' style={{height: '100%'}}>	
							<Container style={{ marginTop: '10px' }}>
								<br/>
							<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Why Us</h1>
							<br/>

							<p style={{color: 'white', textAlign: 'left'}}>We are Seconds, we deliver <b>results</b>.</p>
							<br/>
							<p style={{color: 'white', textAlign: 'left'}}>We focus your brand to your customer’s attention to Buy your
							goods or services.</p>
							<br/>
							<p style={{color: 'white', textAlign: 'left'}}>We don’t make good designs for your customer to tell you,
							Good work.</p>
							<br/>

							<p style={{color: 'white', textAlign: 'left'}}>We create Great advertising for your customers to Always Buy
							through Direct & indirect digital practices so you <b>Stand out</b>.</p>
							<br/><br/>

							
							</Container>
						
						</Container>
				</Grid>
				</Grid>
				</Container>

				{/* values */}
				<Container data-aos="fade-up" data-aos-duration="1000" >
				<Grid container  style={{marginTop: '70px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
				<Grid item xs={12} md={12} style={{ background: 'black',  height: 'auto', }} >

				<Container className='pglass shadow1' style={{height: '100%'}}>
							<div className='circle1' style={{marginTop: '-20px', marginLeft: '-30px'}}></div> 
							
								<Container>
								<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Values</h1>
								<br/>
								<Grid container space={2}>
									<Grid item xs={12} md={6} style={{ background: 'black',  height: 'auto', }} >

										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Relentless curiosity</h1>
										<br/>
										<p style={{color: 'white', textAlign: 'left'}}>We keep asking </p>
										<p style={{color: 'white', textAlign: 'left'}}>Can we do it better? </p>
										<p style={{color: 'white', textAlign: 'left'}}>Can we do more? </p>
										<p style={{color: 'white', textAlign: 'left'}}>Can we go beyond? </p>
										<p style={{color: 'white', textAlign: 'left'}}>We see possibility. </p>
										<br/>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Pervasive creativity</h1>
										<br/>
										<p style={{color: 'white', textAlign: 'left'}}>Creativity is not a business card or department,
										it’s respect for good ideas and the people who
										have them.</p>
										<p style={{color: 'white', textAlign: 'left'}}>You and Me,
										Our client, AnyOne, Anywhere.</p>

								</Grid>
								<Grid item xs={12} md={6} style={{ background: 'black',  height: 'auto', }} >
								<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Eternal Craft</h1>
										<br/>
										<p style={{color: 'white', textAlign: 'left'}}>We never Stop improving our craft.</p>
										<p style={{color: 'white', textAlign: 'left'}}>We care about the people we do it with &
										make the assets that make brands more
										valuable.</p>
										<br/>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Adaptive relationship
										</h1>
										<br/>
										<p style={{color: 'white', textAlign: 'left'}}>We connect people with different
										backgrounds, skills and view points into a fluid team.</p>
										<br/>
										<p style={{color: 'white', textAlign: 'left'}}>We resist the usual.</p>

								</Grid>

								</Grid>
								
									
							<div className='circle1' style={{marginBottom: '-20px', marginRight: '-65px', float: 'right'}}></div> 
								</Container>
							
							</Container>
					</Grid>
					</Grid>
				</Container>

				{/* Clients */}
				<Container data-aos="fade-up" data-aos-duration="1000" >
					<Grid container  style={{marginTop: '70px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
					<Grid item xs={12} md={12} style={{ background: 'black',  height: 'auto', }} >

					<Container className='pglass shadow1' style={{height: '100%'}}>	
							<Container style={{ marginTop: '10px' }}>
								<br/>
							<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Clients</h1>
							<br/>

							

							
							</Container>
						
						</Container>
				</Grid>
				</Grid>
				</Container>

					{/* values */}
					<Container data-aos="fade-up" data-aos-duration="1000" >
				<Grid container  style={{marginTop: '70px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
				<Grid item xs={12} md={12} style={{ background: 'black',  height: 'auto', }} >

				<Container className='pglass shadow1' style={{height: '100%'}}>
							<div className='circle' style={{marginTop: '-20px', marginLeft: '-30px'}}></div> 
							
								<Container>
								<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Contact</h1>
								<br/><br/>
								<Grid container space={2}>
									<Grid item xs={12} md={6} style={{ background: 'black',  height: 'auto', }} >

									<Card className={classes.root}>
									<CardActionArea >
									<CardMedia className='box_shadow'
									component="img"
									alt="Contemplative Reptile"
									height="100%"
									image="./qr.jpg"
									title="Contemplative Reptile"
									/>
									</CardActionArea>
									</Card>
									

										

								</Grid>
								<Grid item xs={12} md={6} style={{ background: 'black',  height: 'auto', }} >
								<br/>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>+256 786 118137</h1>
										<br/>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>+256 754 615840</h1>
										<br/>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Plot 2, 6 Ntinda ll, Naguru</h1>
										<br/>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>marketing@secondsug.com </h1>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>business@secondsug.com</h1>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>customercare@secondsug.com </h1>
										<br/>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>General inquiry </h1>
										<br/>
										<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>info@secondsug.com</h1>
										
		
											<div style={{ marginTop: '20px'}}>
											<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
											<SocialIcon url="https://twitter.com/secondstechltd/status/1563444278080454656?s=21&t=sEIg6ta_dGdNr7Squcte8w" style={{margin: 'auto', MarginRight: '5px'}} target='blank'/>
											<SocialIcon url="https://www.linkedin.com/company/seconds-technology-limited" target='blank'/>
											<SocialIcon url="https://www.instagram.com/p/CifJVTesNWN/?igshid=MDJmNzVkMjY=" target='blank'/>
											<SocialIcon url="https://www.facebook.com/Secondstechltd" target='blank' />
											<SocialIcon url="https://api.whatsapp.com/send/?phone=0754615840" target='blank'/>
											{/* <FloatingWhatsApp phoneNumber='0754615840' accountName='Seconds Uganda Ltd' avatar={<img src="https://secondsug.com:2083/cpsess6338173694/frontend/paper_lantern/filemanager/showfile.html?file=Seconds+logo.png&fileop=&dir=%2Fhome%2Fsecondsug%2Fpublic_html%2Fstatic&dirop=&charset=&file_charset=utf-8&baseurl=&basedir=" alt="Logo" />} /> */}
											</span>
											</div>
										

								</Grid>

								</Grid>
								
									
							<div className='circle' style={{marginBottom: '-20px', marginRight: '-65px', float: 'right'}}></div> 
								</Container>
							
							</Container>
					</Grid>
					</Grid>
				</Container>
				<br/> <br/>





			</Container>

			
		
				</section>
			</div>
			<Footer />
		</>
	);
}
export default Business;