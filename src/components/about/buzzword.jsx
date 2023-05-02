import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DevicesIcon from '@mui/icons-material/Devices';
import { Typography } from "@mui/material";


function BuzzWords() {

    const buzzwords = [
        {
            icon: ElectricBoltIcon,
            buzz: 'Efficient',
            caption: 'Optimize code and assets for fast loading times and smooth performance.'
        },
        {
            icon: GroupsIcon,
            buzz: 'Collaborative',
            caption: 'Effectively collaborates with team members and clients to deliver seamless web solutions.'
        },
        {
            icon: LightbulbIcon,
            buzz: 'Intuitive',
            caption: 'Designs user-friendly interfaces with intuitive navigation and interactions.'
        },
        {
            icon: DevicesIcon,
            buzz: 'Responsive',
            caption: 'Designs user-friendly interfaces with intuitive navigation and interactions.'
        },
    ]

    return (
    <>
        <Grid2 container xs={12} maxWidth='85vw' sx={{margin: '0 auto'}}>
            {buzzwords.map((buzz) => {
            return  <Grid2 item xs={6} md={3} sx={{textAlign:'center', padding: '3%'}}>
                        <buzz.icon sx={{color: '#4794f8', fontSize: '4.4rem'}}></buzz.icon>
                        <Typography sx={{fontWeight:'bold', fontSize: '1.7rem', margin: '2rem auto'}}>{buzz.buzz}</Typography>
                        <Typography>{buzz.caption}</Typography>
                    </Grid2>
            })}

        </Grid2>
    </>
    )
}

export default BuzzWords