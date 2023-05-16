import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Welcome() {
    
    const welcomeStyle = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent',
    }

    const paperStyle = {
        color:'inherit',
        textAlign:'center'
    }

    const typeStlye = {
        fontSize: '2rem', 
        color:'#fff',
        margin: '1rem 0'
    }

    const [target, setTarget] = useState('');

    function handleClick(id) {
        setTarget(id);
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
            <Container style={welcomeStyle} id='home'>
                <Container style={paperStyle}>
                    <Typography style={typeStlye}>Hello, I am <span style={{color:'#4794f8'}}>Trey Clark</span>.</Typography>
                    <Typography style={typeStlye}>I am a Full Stack <span style={{color:'#4794f8'}}>Web Developer</span>.</Typography>
                    <button onClick={() => handleClick('about')} className='button'>Learn More</button>
                </Container>
            </Container>
    );
  }



export default Welcome