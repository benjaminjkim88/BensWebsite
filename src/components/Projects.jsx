import React from 'react'
import ProjectCard from './ProjectCard';
import piratePhoto from './../images/pirate_plunderers.PNG';
import shopApp from './../images/shopApp.PNG';

const Projects = (props) => {
    return(
        <div className="projects-class">
            <a href={props.link} target="_blank">
                <img className="mb-6 rounded-xl transition-transform transform group-hover:scale-105 
                                hover:opacity-25" 
                    src={props.screenshot} 
                    alt={props.alt}
                />
            </a>
            <h3 className="font-bold text-center mb-6">{props.project}</h3>
            <p className='text-center'>{props.description}</p>
        </div>
    )
}

export default Projects;