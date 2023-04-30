import React from "react";
import AboutMe from "./components/about/aboutme";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import ProjectList from "./components/projects/projects";
import Welcome from "./components/welcome/welcome";



function App() {
    return (
        <>
        <Welcome />
        <AboutMe />
        <ProjectList />
        <Contact />
        <Footer />
        </>
    )
}

export default App