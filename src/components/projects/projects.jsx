import React from "react";
import sps from '../../assets/sps.png'
import takenote from '../../assets/takenote.png'
import techblog from '../../assets/techblog.png'
import { ImageList, Container } from "@mui/material";

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
        <Container sx={{margin: '0 auto', width: '70vw', display:'flex', justifyContent:}}>    
            <ImageList variant="masonry" cols={3} > 
                {itemData.map((item) => (
                    <Container key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        className="project"
                    />
                    </Container>
                ))}
            </ImageList>
        </Container>
        </>

    )
}

export default ProjectList