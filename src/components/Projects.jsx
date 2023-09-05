import React from 'react'
import ProjectCard from './ProjectCard';
import piratePhoto from './../images/pirate_plunderers.PNG';
import shopApp from './../images/shopApp.PNG';

const Projects = () => {
    return(
        <div className="project-container">
            <h1>My Projects:</h1>
            <ProjectCard 
                screenshot={piratePhoto}
                alt="pirate plunderers screenshot"
                project="Pirate Plunderers"
                description="A fun React application involving shooting enemy pirates before they enter your base."
            />
            <ProjectCard 
                screenshot={shopApp}
                alt="shopping app screenshot"
                project="Shopping List"
                description="A cross platform shopping list. Can be used my multiple people to add and delete shopping items in real time!"
            />
        </div>
    )
}

export default Projects;