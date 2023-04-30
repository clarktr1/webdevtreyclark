import React from "react";
import { Container, Typography } from '@mui/material'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BuzzWords from './buzzword'
import TextSphere from "./tagcloud";
import resume from '../../assets/resume.pdf'





function AboutMe() {
    const tagLines = ['I am a Front End Developer in Dallas, TX. I have a passion for collaborating with teams to create the BEST possible user experiences. With adjectives such as goal-oriented, clever problem solver, and detail-driven, I am the perfect member to add to your team to help dreams come to life.', 'Let\'s make something great.']

    const aboutTextStyle = {
        marginBottom: '2rem'
    }
    return (
    <>  <Container sx={{margin: '6rem auto'}}>
        <BuzzWords />
            <Grid2 container xs={12} maxWidth='80vw' sx={{margin:'0 auto'}}>
                <Grid2 item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
                    <TextSphere />
                </Grid2>
                <Grid2 item xs={12} md={6} sx={{margin: 'auto 0', padding:'3%'}}>
                    <Typography style={aboutTextStyle}>{tagLines[0]}</Typography>
                    <a href="#" className='link'>
                        <Typography style={aboutTextStyle} sx={{fontSize: '1.5rem'}}>{tagLines[1]}</Typography>
                    </a>
                    <Typography style={aboutTextStyle}>Need a resume? <a href={resume} target="_blank" className="link">Click Here!</a></Typography>
                </Grid2>
            </Grid2>
        </Container>
    </>
    )
}

export default AboutMe