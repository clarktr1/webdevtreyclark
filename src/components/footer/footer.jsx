import React from "react";
import { Container } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



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
    ]

    return (
        <>
            <Container sx={{display:'flex', justifyContent:'center'}}>
                {links.map((link) => {
                    return <a href={link.link} target="_blank"><link.icon sx={{fontSize: '3rem'}} className="social-icon"></link.icon></a>
                })}
            </Container>
        </>
    )
}

export default Footer