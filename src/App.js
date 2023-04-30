import React from "react";
import AboutMe from "./components/about/aboutme";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import ProjectList from "./components/projects/projects";



function App() {
    return (
        <>
        <AboutMe />
        <ProjectList />
        <Contact />
        <Footer />
        </>
    )
}

export default App