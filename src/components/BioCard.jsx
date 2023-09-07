import React from 'react'
import photo from './../images/headshot.jpg'

const BioCard = () => {
    return(
        <div className='flex flex-col gap-8'>
            <img className="h-80 w-80 rounded-full p-6 mx-auto my-auto" src={photo} alt="ben headshot" />

            <div className="flex flex-col items-center rounded-xl bg-slate-600
                            border-none mx-auto h-50 w-3/4">

                <div className='flex flex-col items-center p-6'>  
                    
                    <h3 className='text-gray-900 font-xl font-bold'>A little bit about myself...</h3>

                    <p className="text-gray-900 text-center px-6">
                        <br></br>
                        I recently graduated from the University of Maryland Global Campus with a 
                        4.0 GPA and Summa Cum Laude honors. During my time at school, I learned 
                        Java and SQL database concepts alongside interacting with AWS cloud
                        components (S3 storage, DynamoDB database) using Python. In my personal time,
                        I have been learning JavaScript and React to build web applications.
                        <br></br>
                        <br></br>
                        Professionally, I am a Senior Intelligence Analyst for Everbridge. During my
                        day, I fulfill my regular duties as an analyst, as a mentor, and as a supervisor. 
                        After my duties are done, I switch hats to become a backend Python engineer.
                        In this role, I use tools such as Python, Git, Linux, and AWS to write,
                        automate, and deploy scripts. These scripts interact with state and federal 
                        government APIs and utility APIs to monitor for alerts and/or updates which
                        my scripts then process into KML data files that can be used to show the data
                        visually. Then they are uploaded to the Everbridge SaaS platform as detailed 
                        geospatial data for customers and fellow team members. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BioCard;