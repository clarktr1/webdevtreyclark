import { Typography, Container } from "@mui/material";
import React from "react";



const welcomeStyle = {
    width: '80vw',
    height: '100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

function Welcome() {
    return (
        <>
            <Container style={welcomeStyle}>
                <Typography>Hello</Typography>
            </Container>
        </>
    )
}

export default Welcome