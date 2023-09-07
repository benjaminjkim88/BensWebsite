import { useState } from "react";

const ExpCard = (props) => {

    return(
        <div className={`flex flex-col gap-10 -mt-80`}>
                        
            <div className="flex flex-col place-items-center rounded-xl w-82 bg-slate-600
                                border-none my-auto mx-10 pt-6">
                <h1 className="text-xl font-bold text-center px-6">{"Back-end Python Developer Intern"}</h1>
                <p className="text-center p-6">
                    {`After receiving this opportunity, I have gained the ability to utilize my 
                    skills in Python to effectively interface with various APIs and write scripts
                    that parse and process JSON data, and create Google KML files for integration with 
                    Google Earth to enhance our geospatial capabilities. 
                    
                    Additionally, I have learned to leverage Amazon EC2 cloud resources and Linux 
                    machines to establish automated processes for managing and updating geospatial 
                    layers on Everbridge's central Saas platform. Doing this has ensured our data 
                    remains current for real-time tracking and informed decision-making.`}
                    <br></br>
                    <br></br>
                    {`Furthermore, I have had the privilege to design and develop Python-driven bots 
                    that interact seamlessly with the Slack Messenger API. These bots play a pivotal 
                    role in our operations by parsing government travel and fire department site 
                    data to provide timely travel alerts and wildfire growth rates, fostering proactive 
                    responses and cross-team collaboration.`} 
                    <br></br>
                    <br></br>
                    {`Additionally, I've implemented Linux scheduling commands to monitor our cloud 
                    machine storage, ensuring notifications are promptly sent when storage reaches \
                    critical levels. This proactive approach helps prevent data loss and system 
                    downtime, facilitating smooth and uninterrupted operations.`}
                </p>
            </div>

            <div className="flex flex-col place-items-center rounded-xl w-82 bg-slate-600
            border-none my-auto mx-10 pt-6">
            <h1 className="text-xl font-bold text-center px-6">{"Senior Intelligence Analyst"}</h1>
            <p className="text-center p-6">
                {`I specialize in proficiently evaluating, researching, and reporting on both 
                domestic and international security incidents, harnessing a comprehensive array of 
                disciplines, including OSINT, SIGINT, HUMINT, and GEOINT. My expertise enables me to 
                provide clients with invaluable insights and strategic recommendations, ensuring 
                informed decision-making in critical security matters. In addition, I take pride in my role as a 
                supervisor, mentor, and guide to junior analysts, dedicated to elevating their capabilities in 
                preparing security reports and ultimately enhancing our team's overall efficiency.`}
                <br></br>
                <br></br>
                {`On a more technical note, this role has made me proficient in working well with
                others to do tasks that require triaging, multitasking, and working under pressure.
                I have mastered all of the former and proudly carry these skills with me on my
                programming journey.`}
            </p>
            </div>
        </div>
    )
}

export default ExpCard;