import React from 'react'
import photo from './../images/headshot.jpg'

const Bio = () => {
    return(
        <div className="left-bio">
            <img className="headshot" src={photo} alt="photo headshot" />
        
            <p className="body-text">
                Hello! 
                <br></br>
                <br></br>
                I am currently working as a Backend Python Engineering intern
            </p>
        </div>
    )
}

export default Bio;