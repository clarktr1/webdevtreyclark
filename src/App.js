import React, { useRef } from "react";
import AboutMe from "./components/about/aboutme";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import ProjectList from "./components/projects/projects";
import Welcome from "./components/welcome/welcome";
import Divider from "./components/config/divider";



function App() {

    return (
        <>
            <Welcome />
            <AboutMe />
                <Divider />
            <ProjectList />
                <Divider />
            <Contact />
            <Footer /> 
        </>
    )
}

export default App