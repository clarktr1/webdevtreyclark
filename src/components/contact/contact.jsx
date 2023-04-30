import React from "react";
import ContactForm from "./confact-form";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

function Contact(){
    const sideStyle = {
        color: '#111',
        margin: 'auto 0',
        padding: '3%',
    }

    

    return (
        <Grid2 container xs={12} maxWidth='70vw' sx={{backgroundColor: '#ffffff', margin:'4rem auto'}}>
            <Grid2 item xs={12} md={7}>
                <ContactForm />
            </Grid2>
            <Grid2 item xs={12} md={5} style={sideStyle}>
                <Typography sx={{fontSize: '1.3rem'}}>Looking to start a new project? Want to talk about video games? Curious about the Tag Cloud?</Typography>
                <Typography sx={{fontWeight: 'bold',  fontSize: '1.7rem', margin: '1.2rem 0'}}>Let's Connect!</Typography>
            </Grid2>
        </Grid2>
    )
}

export default Contact