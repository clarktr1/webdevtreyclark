import React from "react";
import sps from '../../assets/sps.png'
import takenote from '../../assets/takenote.png'
import techblog from '../../assets/techblog.png'
import { ImageList } from "@mui/material";
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
    }
]


function ProjectList() {
    return (
        <>   
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
                        <div className="overlay" >
                            <a href={item.link} target="_blank"><button>View Project Repo</button></a>
                        </div>
                    </ImageListItem>
                ))}
            </ImageList>
        </>

    )
}

export default ProjectList