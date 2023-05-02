import React from "react";
import sps from '../../assets/sps.png'
import takenote from '../../assets/takenote.png'
import techblog from '../../assets/techblog.png'
import hexgen from '../../assets/hex-gen.png'
import { ImageList, Typography, Container } from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import '../../styles.css'

const itemData = [
    {
        title: 'Sps',
        img: sps,
        link: 'https://github.com/Turn-Based-Game-Project/Princess-Saving-Simulator'
    },
    {
        title: 'takenote',
        img: takenote,
        link: 'https://github.com/clarktr1/Express-Note-Taker'
    },
    {
        title: 'techblog',
        img: techblog,
        link: 'https://github.com/clarktr1/Blog-Site'
    },
    {
        title: 'hexgen',
        img: hexgen,
        link:'https://clarktr1.github.io/Hex-Generator/'
    }
]

function ProjectDisplay(){
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default ProjectDisplay