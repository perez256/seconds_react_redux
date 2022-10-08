import React from 'react';
import {  Container, Grid} from '@mui/material';
import Footer from '../../components/Footer'

import MarkettingForm from '../../components/SecondForms/MarkettingForm';


function DigitalMarketting() {
  return (
    <>
    <div>
      <section>
        <img
          className="inset-0 object-cover w-full h-[500px]"
          src="./about_img.jpeg"
          alt="" />

     {/* values */}
	 <Container  style={{border: '1px solid rgba(255, 255, 255, 0.14)' }}>

	 <Container>
				<Grid container  style={{marginTop: '-70px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
				<Grid item xs={12} md={12} style={{ background: 'black',  height: 'auto', }} >

				<Container className='pglass shadow1' style={{height: '100%'}}>
				<div className='circle1' style={{marginTop: '-20px', marginLeft: '-30px'}}></div> 
				
					<Container>
					<h1 style={{color: 'white', textAlign: 'left', fontSize: '19px'}}>Seconds Advertising </h1>
					<br/>
					<Grid container space={2}>
                <Grid item xs={12} md={6} >
                  <br/> <br/> 
                <p style={{color: 'white', textAlign: 'left'}}>The internet influences all traditional advertising means.</p>
							<br/>
              <p style={{color: 'white', textAlign: 'left'}}>We create assets that make brands more valuable</p>
							<br/>

              <p style={{color: 'white', textAlign: 'left'}}>A film , A design , A line of code, An experience </p>
				
				
							<br/>

		<p style={{color: 'white', textAlign: 'left'}}><a href="#">Learn more</a> </p>
				<br/>

			<p style={{color: 'white', textAlign: 'left'}}>
			(Name , contact and address) 
				</p>
			<br/>

			<p style={{color: 'white', textAlign: 'left'}}>
			Any business can scale digitally without limits at a cost fraction. 
				</p>
			<br/>


			<p style={{color: 'white', textAlign: 'left'}}>
			Seconds Research 
				</p>
			<br/>

			<p style={{color: 'white', textAlign: 'left'}}>
			Research is Continuous, Consumers evolve more rapidly with over 50 billion internet indexed webpages.
				</p>
			<br/>


			<p style={{color: 'white', textAlign: 'left'}}>
			Research intelligence is a competitive business strategy, to uncovering new growing markets and better ways to have an edge in existing ones. 
				</p>
			<br/>


			<p style={{color: 'white', textAlign: 'left'}}>
			Capitals of Industry, must continuously search for a business edge either in marketing, management, sales , Information technology and others. 
				</p>
			<br/>


			<p style={{color: 'white', textAlign: 'left'}}>
			Discover your competitive Edge
				</p>
			<br/>

			<p style={{color: 'white', textAlign: 'left'}}>
			(Business name, contact ,Address )
				</p>
			<br/>

			<p style={{color: 'white', textAlign: 'left'}}>
			Our quest to go further is a universal principle towards consistent growth , Seconds is time in still motion, our signage is forever mastery 
				</p>
			<br/>

			<p style={{color: 'white', textAlign: 'left'}}>
			Research as information or Knowledge is immortal 
				</p>
			<br/>

			<p style={{color: 'white', textAlign: 'left'}}>
			Truth is light, it’s all we deliver to clients.
				</p>
			<br/>

			
			
				</Grid>

					<Grid item xs={12} md={6} style={{ background: 'black',  height: '450px', }} >
					<MarkettingForm />
                  <br/>					
				</Grid>
				</Grid>					
				<div className='circle1' style={{marginBottom: '-20px', marginRight: '-65px', float: 'right'}}></div> 
				</Container>
				
				</Container>
					</Grid>
					</Grid>
					{/* <div style={{paddingTop: '50px' }}> 
						<embed type="text/html" src="https://marketing.secondsug.com/" width="100%" height="1000" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}></embed>
					</div> */}
				</Container>

   </Container>
       
	<br/> <br/>

	</section>
    </div>
    <Footer />
  </>
  )
}

export default DigitalMarketting