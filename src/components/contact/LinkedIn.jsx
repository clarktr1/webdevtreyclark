import { Container, Typography, Paper } from "@mui/material"


function LinkedIn (){
    return(
        <>   
            <Container sx={{backgroundColor: '#1e1e1e', borderRadius: '8px', width:'80vw', padding:'6%'}} >
            <Paper sx={{backgroundColor: '#3664f8', width:'100%', borderRadius: '8px', marginBottom:'2rem'}}>
                <Typography component='h2' sx={{textAlign:'center', fontSize:'3rem', color: '#fff', fontWeight:'600', padding:'1.2rem'}} id='linkedin'>Check out my LinkedIn!</Typography>
            </Paper>
            <Container sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}> 
                 <iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/144180' frameborder='0' width='90%' height='900' sx={{textAlign:'center'}} ></iframe>
             </Container>
            </Container>
        </>
    )
}

export default LinkedIn