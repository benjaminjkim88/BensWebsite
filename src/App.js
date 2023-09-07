import React from 'react';
import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Projects from "./components/Projects"
import BioCard from './components/BioCard';
import ProjectCard from './components/ProjectCard';

function App() {

  const [buttonState, setButtonState] = useState({
    'bio': true,
    'education': false,
    'experience': false,
    'projects': false
  });

  console.log(buttonState)

  const handleClick = (event) => {
    const {name} = event.target
    const updateButtons = {};
    
    setButtonState(prev => ({
      ...prev,
      [name]: !prev[name]
    }));

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
          name='education'
          className='button-class'
          onClick={handleClick}>
          Experience
        </button>
        <button 
          name='experience'
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
          <span className="text-sky-400 font-bold text-xl">React</span>
        </p>
      </div>

      {buttonState.bio? <BioCard /> : null}
      {buttonState.projects? <ProjectCard /> : null}

      <div className="flex flex-shrink-0 border border-stone-50">



      </div>
      
    </div>
  );
}

export default App;
