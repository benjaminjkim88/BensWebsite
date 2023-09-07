import React from 'react'
import photo from './../images/headshot.jpg'

const BioCard = () => {
    return(
        <div className='flex flex-col gap-8 -mt-32'>
            <img className="h-80 w-80 rounded-full p-6 mx-auto my-auto -mb-1 -mt-20" src={photo} alt="ben headshot" />

            <div className="flex flex-col  items-center rounded-xl mx-auto w-80 bg-slate-600
                            border-none my-auto">

                <div className='flex flex-col items-center p-6'>  
                    
                    <h3 className='text-gray-900 font-xl'>A little bit about myself...</h3>

                    <p className="text-gray-900 w-80 text-center px-6">
                        <br></br>
                        I recently graduated from the University of Maryland Global Campus with a 4.0 with
                        Summa Cum Laude honors. My trek into software development is a recent venture, but
                        I, and other around me, have witness my steadfast growth and my hunger to aborb any
                        and all concepts I can get my hands on.
                        <br></br>
                        <br></br>
                        This has led me to take part in some projects I never knew I was capable of.
                        In this field it is hard to see how much you have grown, but looking back, you 
                        can really see how far from the starting line you really are.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BioCard;