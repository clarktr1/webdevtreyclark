import React from "react";
import sps from '../../assets/sps.png'
import takenote from '../../assets/takenote.png'
import techblog from '../../assets/techblog.png'
import hexgen from '../../assets/hex-gen.png'
import { ImageList, Typography, Container, Paper } from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageListItem from '@mui/material/ImageListItem';
import '../../styles.css'

const itemData = [
    {
        title: 'Sps',
        img: sps,
        link: 'https://github.com/Turn-Based-Game-Project/Princess-Saving-Simulator',
        tech: 'Express, SQL, JS'
    },
    {
        title: 'takenote',
        img: takenote,
        link: 'https://github.com/clarktr1/Express-Note-Taker',
        tech: 'Node, FS'
    },
    {
        title: 'techblog',
        img: techblog,
        link: 'https://github.com/clarktr1/Blog-Site',
        tech: 'Express, Seqelize, Handlebars'
    },
    {
        title: 'hexgen',
        img: hexgen,
        link:'https://clarktr1.github.io/Hex-Generator/',
        tech: 'React'

    }
]


function ProjectList() {
    return (
        <>  
        <Container sx={{ backgroundColor: '#1e1e1e', borderRadius: '8px'}}>
        <   Paper sx={{backgroundColor: '#3664f8', width:'100%', borderRadius: '8px', marginBottom:'2rem'}}>
                <Typography component='h2' sx={{textAlign:'center', fontSize:'3rem', color: '#fff', fontWeight:'600', padding:'1.2rem'}}>My Work</Typography>
            </Paper>
            <ImageList sx={{ width: 500, height: 450, margin: '0 auto', position:'relative' }} cols={3} rowHeight={164}>
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