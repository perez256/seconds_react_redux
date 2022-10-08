import React from 'react';
import Footer from '../../components/Footer'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Container, Grid } from '@mui/material';

function About() {
    return (
        <div className="relative">

            <div className='flex-container1'>
                <div className='flex-item-right1'>
                    {/*About background */}
                    <img className='inset-0 object-cover' src='./city_new.jpg' alt='' sx={{backgroundSize: 'cover',  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '10vh'}} />
                    <div className='absolute top-0 mt-20 items-center justify-between text-white'>
                        <div className='items-center ml-20'>
                            <h1 data-aos='fade-up' data-aos-duration='1000' className='font-sans font-bold text-7xl'></h1>
                        </div>
                    </div>
                </div>
            </div>

            <Container  style={{border: '1px solid rgba(255, 255, 255, 0.14)' }}>
                {/* at 1600 km */}
				<Container>
					<Grid container  style={{marginTop: '-60px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
					<Grid item xs={12} md={12} style={{ background: 'white',  height: 'auto', }} >
						
						<Container className='pglass shadow1' style={{height: '100%'}}>
						<div className='circle2' style={{marginTop: '-20px', marginLeft: '-30px'}}></div> 
						<div className='circle2' style={{marginTop: '-50px', marginRight: '-35px', float: 'right'}}></div> 
							<Container data-aos="fade-up" data-aos-duration="1000" >
                                <h1 style={{ textAlign: 'center'}}>ABOUT US</h1>
                                <br/>

                                <h1 style={{ textAlign: 'left'}}>Corporate overview</h1>
                                <br/>
							<p style={{color: 'black', textAlign: 'justify'}}>
                            Seconds is a technology provider that Designs , Operates and Markets a fast growing 2.7 million user mobile platform, focused to reach 10,000,000 million users by 2023. 
                               </p>
							<br/>

                            <p style={{color: 'black', textAlign: 'justify'}}>
                            Seconds ignites opportunities to people everywhere, with technology that is tailored to people problems. 
Inspiring people and businesses to do more.
                               </p>
							<br/>

                            <p style={{color: 'black', textAlign: 'justify'}}>
                            Seconds is unlocking the digital sharing economy potential in Africa, Uganda.
                               </p>
							<br/>

							<p style={{color: 'black', textAlign: 'justify'}}> <span style={{color: '#6FC6A5'}}>Seconds </span>
                             provides people with flexible work and better income. It is committed to collaborating with policy makers, and other stakeholders, communities to solve various mobility problems, environmental and employment challenges through encouraging public and private transport. 
                            </p>
                            <br/>

                            <p style={{color: 'black', textAlign: 'justify'}}>
                            Seconds strives to create better experiences and greater social value, by building an Open , safe , inclusive and sustainable transportation with a local service ecosystem for better future cities.
                               </p>
							<br/>
                            <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                            <Typography>Read our mission</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To connect, empower, and impact lives.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/*Vision */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                            <Typography >Read our vision</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Mobility that is open and enabled by people.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/*Statement */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                            <Typography >Read our statement</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                A world where anyone anywherecan transform their lives.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>



								<div className='circle2' style={{marginBottom: '-45px', marginLeft: '-60px'}}></div> 
						<div className='circle2' style={{marginBottom: '-20px', marginRight: '-65px', float: 'right'}}></div> 
							</Container>
						
						</Container>
					</Grid>
					</Grid>
				</Container>


            </Container>
            <br/> <br/>







          
            <Footer/>
        </div>
    );
}
export default About;