import React from 'react'

const ProjectCard = (props) => {
    return(
        <div>
            <img className="transition-transform transform group-hover:scale-105 hover:opacity-25" src={props.screenshot} alt={props.alt}/>
            <h3>{props.project}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectCard;