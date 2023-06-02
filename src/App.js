import React, { useRef, useContext } from "react";

import AboutMe from "./components/about/aboutme";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import ProjectList from "./components/projects/projects";
import Welcome from "./components/welcome/welcome.jsx";
import Divider from "./components/config/divider";
import FloatNav from "./components/navbar/floating-nav";
import LinkedIn from "./components/contact/LinkedIn";


function App() {


    return (
        <>  
            <FloatNav />
            <Welcome />
            <AboutMe />
                <Divider />
            <ProjectList />
                <Divider />
            <LinkedIn />
                <Divider />
            <Contact />
        </>
    )
}

export default App