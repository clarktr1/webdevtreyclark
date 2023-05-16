import { Container } from "@mui/material"
import Link from 'react-dom'
import Home from '@mui/icons-material/Home'
import Person from '@mui/icons-material/Person'
import DocumentScanner from '@mui/icons-material/DocumentScanner'
import Phone from '@mui/icons-material/Phone'
import ArrowUpwardRounded from '@mui/icons-material/ArrowUpwardRounded'
import { useEffect, useState } from "react"


function FloatNav() {

    const [menu, setMenu] = useState()
    const navBtns = [
        {
            icon:Home,
            link:'home'
        },
        {
            icon: Person,
            link: 'about'
        },
        {
            icon: DocumentScanner,
            link: 'project'
        },
        {
            icon: Phone,
            link: 'contact'
        }
    ]

    function handleClick(){
        toggleMenu()
    }

    function toggleMenu(){
        if (menu === 'show'){
            document.querySelector('#navs').style.display = 'none'
            document.querySelector('#arrow').style.transform = 'rotateX(180deg)'
            setMenu('hidden')
        }
        if (menu === 'hidden'){
            document.querySelector('#navs').style.display = 'block'
            document.querySelector('#arrow').style.transform = 'rotateX(360deg)'
            setMenu('show')
        }
    };

    useEffect(() => {
        setMenu('hidden')
        toggleMenu()
        document.querySelector('#arrow').style.transform = 'rotateX(180deg)'
    }, [])

    return (
        <nav>
            <Container sx={{width:'50px', position:'fixed', backgroundColor:"transparent", left:"3vw", bottom:'0', zIndex:'999'}} className="nav-container">
                <Container  id="navs">
                {navBtns.map((button) => {
                    return (
                        <Container key={button.link} sx={{display:'flex', justifyContent:'center', alignItems:'center'}} className="nav-icon">
                            <a href={`#${button.link}`}>
                                <button.icon
                                className="nav-pic">
                                </button.icon>
                            </a>
                        </Container>
                        
                    )
                })}
                </Container>
                <Container className="nav-icon" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} id='hamburger'
                onClick={() => handleClick()}>
                    <ArrowUpwardRounded 
                    className='nav-pic' id='arrow' >
                    </ArrowUpwardRounded>
                </Container>
            </Container>
        </nav>
    )
}

export default FloatNav