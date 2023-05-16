import React, { useState, useEffect } from "react";
import { Container, Typography, Paper } from '@mui/material'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BuzzWords from './buzzword'
import TextSphere from "./tagcloud";
import Sphere1 from "./sphere1";
import resume from '../../assets/resume.pdf'






function AboutMe() {
    const tagLines = ['I am a Front End Developer in Dallas, TX. I have a passion for collaborating with teams to create the BEST possible user experiences. With adjectives such as goal-oriented, clever problem solver, and detail-driven, I am the perfect member to add to your team to help dreams come to life.', 'Let\'s make something great.']

    const aboutTextStyle = {
        marginBottom: '2rem'
    }

    const [target, setTarget] = useState('');

    function handleClick(id) {
        setTarget(id);
        console.log(target)
      }

      function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      }

      useEffect(() => {
        if (target) {
          smoothScroll(`#${target}`);
          setTarget('')
        }
      }, [target]);

    return (
    <>  <Container sx={{ backgroundColor: '#1e1e1e', borderRadius: '8px', width:'90vw'}} id='about'>
            <Container sx={{backgroundColor: '#3664f8', width:'100%', borderRadius: '8px', marginBottom:'1.4rem'}}>
                <Typography component='h2' sx={{textAlign:'center', fontSize:'3rem', color: '#fff', fontWeight:'600', padding:'1.2rem'}}>Who Am I?</Typography>
            </Container>
        <BuzzWords />
            <Grid2 container xs={12} maxWidth='80vw' sx={{margin:'0 auto'}}>
                <Grid2 item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
                    <Sphere1 />
                </Grid2>
                <Grid2 item xs={12} md={6} sx={{margin: 'auto 0', padding:'3%'}}>
                    <Typography style={aboutTextStyle}>{tagLines[0]}</Typography>
                        <Typography   className='link' onClick={() => handleClick('contact')} style={aboutTextStyle} sx={{fontSize: '1.5rem'}}>{tagLines[1]}</Typography>
                   
                    <Typography style={aboutTextStyle}>Need a resume? <a href={resume} target="_blank" className="link">Click Here!</a></Typography>
                </Grid2>
            </Grid2>
        </Container>
    </>
    )
}

export default AboutMe