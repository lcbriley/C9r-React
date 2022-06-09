//import logo from './logo.svg';
import './App.css';

//import Tooltip from '@mui/material/Tooltip';
//import {AddField} from './AddField';
//import Main from './Main.js'
import './babel.config.js';
import { useState } from 'react';
import {Helmet} from "react-helmet";
//import React, { Component } from 'react'
//import Collapsible from 'react-collapsible';
import Popup from './Popup';
//import Visibility from './visibility';




//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'






function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
 


//  const [buttonExpandGroup, setButtonExpandGroup] = useState(false);
//   const [buttonDeleteGroup, setButtonDeleteGroup] = useState(false);
//   const [buttonEditGroup, setButtonEditGroup] = useState(false);
  
  


  
  return (
      <div className="App">
<Helmet><script src="https://kit.fontawesome.com/1348f1f9e7.js" crossorigin="anonymous"></script></Helmet>

        <nav className="flex items-center flex-wrap bg-sky-900 p-3">
          <div className="flex items-center flex-shrink-0 text-white mr-6 pl-2">
            <img src="img/Logo.png" alt="" className="h-12 w-20"/>
          </div>
  
          <div className="w-full block flex-grow sm:flex sm:w-auto">
            <div className="text-sm sm:flex-grow">
              <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-slate-400 hover:text-white mr-4">
                Projects
              </a>
              <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-slate-400 hover:text-white mr-4">
                Users
              </a>
              <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-slate-400 hover:text-white mr-4">
                Activity
              </a>
              <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-slate-400 hover:text-white">
                Training & Support
            </a>
            </div>
          
            <div>
              <div className="relative inline-block text-left">
                <div>     
                  <div className="flex mr-3">
                    <a href="#" className="text-slate-400 hover:text-white">Claire Briley </a>
                    <svg className="-mr-1 ml-2 h-5 w-5 text-slate-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

          <div className="mx-5 mt-5 flex justify-between">  
            <h1 className="text-bold"><strong>My Projects</strong></h1>
            <button className="bg-sky-500 rounded-sm p-1 text-white ">Upload Data</button>
          </div>

          <hr className="mt-4"/>
          <button className="bg-gradient-to-r from-light-blue to-dark-blue text-white font-bold py-2 px-4 rounded" onClick={() => setButtonPopup(true)}>Open Popup</button>
          <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}/>

        <div className="flex justify-center mt-5">
          <p className=" text-sm">
            <span className="text-slate-500">Sort By- </span>
            <button className="bg-neutral-100 border-solid border-2 border-slate-200 rounded-sm p-1 text-slate-400 ">Alphabetical</button>
            <button className="bg-white border-solid border-2 border-sky-500 text-sky-500 rounded-sm p-1 ">Last Activity</button>
          </p>
        </div>
  
       
        <div className="flex items-center justify-center mt-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="bg-green-100 w-11 text-green-600 p-1 rounded-md h-8">NEW</header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case One</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Two</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className=" h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Three</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Four</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Five</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Six</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Seven</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Eight</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Nine</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
            
            <div className="p-3 bg-white rounded-lg shadow-lg text-center">
              <header className="h-8"></header>
              <img src="img/card-image.png" alt="" className=""/>
              <h4 className="">Case Ten</h4>
              <p className="text-xs mt-3 text-slate-400">0.87 GB   |   5,214 docs</p>
            </div>
  
          </div>
        </div>
      

        
   
       
);




    
      </div>


   

    
  );
}

export default App;