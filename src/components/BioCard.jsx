import React from 'react'
import photo from './../images/headshot.jpg'

const BioCard = () => {
    return(
        <div className="text-center">
            <img className="h-56 rounded-full" src={photo} alt="photo headshot" />
        
            <p className="text-slate-400">
                Hello! 
                <br></br>
                <br></br>
                Backgroun Info
            </p>
        </div>
    )
}

export default BioCard;