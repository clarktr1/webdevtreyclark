import React from "react";
import { Container } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MySvgIcon from "./cwsvg";



function Footer() {
    const links = [
        {
            icon: GitHubIcon,
            link: 'https://github.com/clarktr1'
        },
        {
            icon: LinkedInIcon,
            link: 'https://www.linkedin.com/in/trey-clark-695a281b6/'
        },
        {
            icon: MySvgIcon,
            link: 'https://www.codewars.com/users/clarktr1'
        }
    ]

    return (
        <>
            <Container sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'20vh', marginTop:'-10vh' }}>
                {links.map((link) => {
                    return <a href={link.link} target="_blank"><link.icon sx={{fontSize: '3rem'}} className="social-icon"></link.icon></a>
                })}
            </Container>
        </>
    )
}

export default Footer