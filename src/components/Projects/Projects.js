import React from 'react'
import { Container } from 'react-bootstrap'
import TextBlock from '../Home/TextBlock/TextBlock'
import ProjectCard from './ProjectCard/ProjectCard'
import './Projects.css'



const Projects = () => {
   

    return (
        <div className="projects-content">
            <Container className="projectsCardContainer">
                <ProjectCard/>
            </Container>
            <TextBlock/>
        </div>
    )
}

export default Projects