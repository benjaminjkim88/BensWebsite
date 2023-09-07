import React from 'react';
import { useState } from 'react'
import './App.css';
import BioCard from './components/BioCard';
import ExpCard from './components/ExpCard';
import EduCard from './components/EduCard';
import ProjCard from './components/ProjCard';


function App() {
  const [buttonState, setButtonState] = useState({
    'bio': false,
    'experience': false,
    'education': false,
    'projects': false
  });
  
  console.log(buttonState)

  const handleClick = (event) => {
    const {name} = event.target
    
    setButtonState(prev => ({
      ...prev,
      [name]: !prev[name]
    }));

    for (const key in buttonState) {
      if (key === [name]) {
        buttonState[key] = true

      } else {
        buttonState[key] = false
      }
    }
  }


  return (
    <div className="bg-gray-900 grid grid-cols-1 h-screen font-sans items-start justify-center">
      <div className="flex justify-center mx-auto max-w-2xl mt-4 border border-slate-300 rounded-xl p-4 gap-5">
        <button 
          name='bio'
          className='button-class'
          onClick={handleClick}>
          Bio
        </button>
        <button 
          name='experience'
          className='button-class'
          onClick={handleClick}>
          Experience
        </button>
        <button 
          name='education'
          className='button-class'
          onClick={handleClick}>
          Education
        </button>
        <button 
          name='projects'
          className='button-class'
          onClick={handleClick}>
          Projects
        </button>

        <p 
          className="ml-20 text-slate-500">Powered by <br></br>
          <span className="text-sky-400 font-bold text-xl">React</span> & <br></br>
          <span className="text-slate-50 font-bold text-xl">Tailwind</span>
        </p>
      </div>

      {buttonState.bio? <BioCard /> : null}
      {buttonState.experience? <ExpCard /> : null}
      {buttonState.education? <EduCard /> : null}
      {buttonState.projects? <ProjCard /> : null}
    </div>
  );
}

export default App;
