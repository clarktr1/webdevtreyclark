import React from "react";
import ContactForm from "./confact-form";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../footer/footer";
import { Typography, Container, Paper } from "@mui/material";

function Contact(){
    const sideStyle = {
        color: '#111',
        margin: 'auto 0',
        padding: '3%',
    }

    

    return (
        <Container sx={{backgroundColor: '#1e1e1e', borderRadius: '8px', width:'80vw', height:'100vh'}} id="contact">
            <Paper sx={{backgroundColor: '#3664f8', width:'100%', borderRadius: '8px', marginBottom:'2rem'}}>
                <Typography component='h2' sx={{textAlign:'center', fontSize:'3rem', color: '#fff', fontWeight:'600', padding:'1.2rem'}}>Contact Me</Typography>
            </Paper>

            <Grid2 container xs={12} maxWidth='70vw' sx={{backgroundColor: '#ffffff', margin:'4rem auto', borderRadius: '8px'}}>
                <Grid2 item xs={12} md={5} style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', padding:"8%"}}>
                    <Typography sx={{fontSize: '1.3rem', color:'#111'}}>Looking to start a new project? Want to talk about video games? Curious about the Tag Cloud?</Typography>
                    <Typography sx={{fontWeight: 'bold',  fontSize: '1.7rem', margin: '1.2rem 0', color:'#111'}}>Let's Connect!</Typography>
                </Grid2>
                <Grid2 item xs={12} md={7} style={sideStyle}>
                    <ContactForm />
                </Grid2>
            </Grid2>
            <Footer />
        </Container>
    )
}

export default Contact