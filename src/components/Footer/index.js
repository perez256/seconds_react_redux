import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';



function Footer() {
    return (
        <div>
            <footer className="p-4 bg-black  shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div className="sm:flex sm:items-center sm:justify-between">
                   
                <a href="https://secondsug.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src="./Seconds_logo.png" className="mr-3 h-8" alt="Seconds Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Seconds</span>
                    </a>

                    <Grid container spacing={2}>
                        <Grid sm={8}>
                            
                            <Container>
                                <br/>
                       

                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/license" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                    </Container>
                        </Grid>
                        <Grid sm={4}>
                        <Container style={{textAlign: 'center', margin: 'auto'}}>
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
                        <SocialIcon url="https://twitter.com/secondstechltd/status/1563444278080454656?s=21&t=sEIg6ta_dGdNr7Squcte8w" style={{margin: 'auto', MarginRight: '5px'}} target='blank'/>
                        <SocialIcon url="https://www.linkedin.com/company/seconds-technology-limited" target='blank'/>
                        <SocialIcon url="https://www.instagram.com/p/CifJVTesNWN/?igshid=MDJmNzVkMjY=" target='blank'/>
                        <SocialIcon url="https://www.facebook.com/Secondstechltd" target='blank' />
                        <SocialIcon url="https://api.whatsapp.com/send/?phone=0754615840" target='blank'/>
                        </span>

                        </Container>
                        </Grid>
                    </Grid>
                    
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://secondsug.com/" className="hover:underline">Seconds™</a>. All Rights Reserved.
                </span>
                
                
               
            </footer>
        </div>
    )
}

export default Footer