import { useState } from 'react'

const Header = (props) => {
    const [buttonState, setButtonState] = useState({
        'bio': false,
        'education': false,
        'experience': false,
        'projects': false
        }
    ) 
    console.log(buttonState)
    

    const {bio, education, experience, projects} = buttonState 
    return(
        <div className="flex justify-center mx-auto max-w-2xl mt-4 border border-slate-300 rounded-xl p-4 gap-5">
            <p className='ml-20 text-slate-400'>Powered by <span className="text-blue-400 font-bold text-xl">React</span></p>
        </div>
    )
}

export default Header;