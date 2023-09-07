const EduCard = () => {
    return(

        <div className="flex mx-auto gap-10 -mt-80">
            <div className="flex flex-col place-items-center rounded-xl w-72 bg-slate-600
                                border-none my-auto mx-10 pt-6">
                <h1 className="text-xl font-bold text-center px-6">{"University of Maryland Global Campus"}</h1>
                <div className="text-center p-6">
                    <p>I graduated with a 4.0 GPA and Summa Cum Laude honors in the 
                    Software Development & Security B.S. program.</p>
                    <br></br>
                    <br></br>
                    <p>In my program, I learned the ins and outs of the Java and Python programming
                    languages. With Python, I learned a great deal about interacting with cloud 
                    systems such as Amazon AWS and working with their components such as managing
                    storage on S3 buckets and DynamoDB database management.</p>
                </div>
            </div>

            <div className="flex flex-col place-items-center rounded-xl w-72 bg-slate-600
            border-none my-auto mx-10 pt-6">
                <h1 className="text-xl font-bold text-center px-6">{"University of Maryland, College Park"}</h1>
                <div className="text-center p-6">
                    <p>I graduated with an English & Communications B.A.</p>
                    <br></br>
                    <br></br>
                    <p>I have obtained an arsenal of skills that have been ingrained in me 
                    during my time studying English. The application of critical thinking and 
                    analysis to textual information is key in understanding code and problem-solving. 
                    Additionally, the ability to communicate and convey your status to your team 
                    clearly and concisely is also important when working on a scrum team.</p>
                </div>
            </div>
        </div>
    )
}

export default EduCard;