import React from "react";
import sps from '../../assets/sps.png'
import takenote from '../../assets/takenote.png'
import techblog from '../../assets/techblog.png'
import hexgen from '../../assets/hex-gen.png'
import jolt from '../../assets/Jolt.png'
import template1 from '../../assets/template1.png'
import { ImageList, Typography, Container, Paper } from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageListItem from '@mui/material/ImageListItem';
import '../../styles.css'

const itemData = [
    { 
        title: 'template1',
        img: template1,
        link: 'https://clarktr1.github.io/ColorScape-Collective/',
        tech: 'Vite, React'
    },
    {
        title: 'Sps',
        img: sps,
        link: 'https://sheltered-falls-73233.herokuapp.com/',
        tech: 'Express, SQL, JS'
    },
    {
        title: 'takenote',
        img: takenote,
        link: 'https://floating-bastion-25491.herokuapp.com/',
        tech: 'Node, FS'
    },
    {
        title: 'techblog',
        img: techblog,
        link: 'https://powerful-woodland-43531.herokuapp.com/',
        tech: 'Seqelize, Express'
    },
    {
        title: 'hexgen',
        img: hexgen,
        link:'https://clarktr1.github.io/Hex-Generator/',
        tech: 'React'

    },
    { 
        title: 'jolt',
        img: jolt,
        link: 'https://jolt2.herokuapp.com/',
        tech: 'MERN, Plaid'
    },
   
]


function ProjectList() {
    return (
        <>  
        <Container sx={{ backgroundColor: '#1e1e1e', borderRadius: '8px', height: '100vh'}} id="project">
            <Paper sx={{backgroundColor: '#3664f8', borderRadius: '8px', marginBottom:'2rem'}}>
                <Typography component='h2' sx={{textAlign:'center', fontSize:'3rem', color: '#fff', fontWeight:'600', padding:'1.2rem'}}>My Work</Typography>
            </Paper>
            <ImageList sx={{ width: '45%', height: 450, margin: '0 auto', position:'relative' }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            className="project"
                        />
                             <ImageListItemBar
                                className="overhead"
                                title={item.tech}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    href={item.link}
                                    target="_blank"
                                >
                                <InfoIcon />
                              
                                </IconButton>
                                }
                            />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
        </>

    )
}

export default ProjectList