import piratePhoto from './../images/pirate_plunderers.PNG'
import shopPhoto from './../images/shopApp.PNG'
import Projects from './Projects'

const ProjCard = () => {
    return(
        <div className='flex'>
            <div className="grid rounded-xl mx-auto w-80 bg-slate-600
                                border-none my-auto">
                <Projects 
                    className="projects-class"
                    link="https://pirate-plunderers.vercel.app/"
                    screenshot={piratePhoto}
                    alt="Pirate Plunderers Screenshot"
                    project="Pirate Plunderes Game"
                    description="A fun game that pits you against enemy pirates trying to steal your tresure.
                                Shoot them all before they reach you!"
                />
                

            </div>

            <div className="grid rounded-xl mx-auto w-80 bg-slate-600
                                border-none my-auto">
                <Projects 
                    className="projects-class"
                    link="https://shoppinglist-app-example.netlify.app/"
                    screenshot={shopPhoto}
                    alt="Ben's Shopping App Screenshot"
                    project="Shopping Application"
                    description="A convenient shopping list that lets multiple users add and delete
                                shopping items from a shopping list that updates in real time against 
                                a live database"
                />                    
            </div>


        </div>

    )
}

export default ProjCard;