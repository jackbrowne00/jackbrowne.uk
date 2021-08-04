import React from 'react'
import { Container } from 'react-bootstrap'
import ProjectCard from './ProjectCard/ProjectCard'
import './Projects.css'



const Projects = () => {
   

    return (
        <div className="projects-content">
            <Container className="projectsCardContainer">
                <ProjectCard/>
            </Container>
        </div>
    )
}

export default Projects