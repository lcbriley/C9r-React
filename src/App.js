import logo from './logo.svg';
import './App.css';
import Popup from './Popup';
//import {AddField} from './AddField';
//import Main from './Main.js'
import './babel.config.js';
import { useState } from 'react';
import {Helmet} from "react-helmet";
//import React, { Component } from 'react'
//import Collapsible from 'react-collapsible';
import AddField from './AddField';
import AddGroup from './AddGroup';
//import {DragDropContext, Droppable} from 'react-beautiful-dnd';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'




function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonAddField, setButtonAddField] = useState(false);
  const [buttonAddGroup, setButtonAddGroup] = useState(false);
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


          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setButtonPopup(true)}>Open Popup</button>

          <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
      
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
            <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Modify Fields</h5>    
          </div>
          <div class="modal-body relative p-4">
            <div className='add-btns flex justify-end'>


              <button onClick={() => setButtonAddGroup (true)} className='inline-flex mr-3'><span><i class="fa-solid fa-layer-group fa-lg mr-1"></i></span> Add Group
              </button>
{/* ----------ADD GROUP POPUP--------- */}

                  <AddGroup trigger={buttonAddGroup} setTrigger= {setButtonAddGroup}>
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
                    <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Create New Group</h5>    
                  </div>

                 <div className='modal-body p-4'>
                    <div className='flex justify-between'>
                      <div className='flex text-sm mt-3 mr-2'>Group Name</div>
                      <input type="text" className='mt-1 block w-1/4 border border-grey-500 shadow-sm' placeholder='Group Name'></input>

                      <div className='flex text-sm mt-3 mr-2'>Filter</div>
                      <input type="text" className='mt-1 block w-1/4 border border-grey-500 shadow-sm' placeholder='Filter'></input>
                    </div>

                    <div className='flex divide-x mt-6'>
                      <div className='w-1/2'>
                          <input type="checkbox" id="includeFamily" name="includeFamily" value="include" class="border-1 border-grey-300 text-blue-500 shadow-sm focus:border-blue-300 checked:bg-blue-500 mt-1" />
                          <button><i class="fa-solid fa-arrow-down-a-z"></i></button>
                          <button><i class="fa-solid fa-arrow-down-z-a"></i></button>
                          <div>Field Selection</div>
                          <div>0</div>
                      </div>
                      <div className='w-1/2'>
                          <input type="checkbox" id="includeFamily" name="includeFamily" value="include" class="border-1 border-grey-300 text-blue-500 shadow-sm focus:border-blue-300 checked:bg-blue-500 mt-1" />
                          <button><i class="fa-solid fa-arrow-down-a-z"></i></button>
                          <button><i class="fa-solid fa-arrow-down-z-a"></i></button>
                          <div>Field Selection</div>
                          <div>0</div>
                      </div>
                    </div>

                    <div className='flex justify-end mt-8'>
                            <button className='border border-grey-200 py-1 px-2.5 mr-2 text-blue-600'> Cancel </button>
                            <button className='border border-grey-200 py-1 px-2.5 bg-blue-500 text-white'> Update </button>
                          </div>


                 </div>

                  </AddGroup>



{/* ----------END ADD GROUP POPUP--------- */}

              <button onClick={() => setButtonAddField (true)} className='inline-flex '><span><i class="fa-solid fa-bars fa-lg mr-1"></i></span> Add Field
              </button>
            </div>
{/* ----------ADD FIELD POPUP--------- */}
                  <AddField trigger={buttonAddField} setTrigger= {setButtonAddField}>
                      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
                        <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Create New Field</h5>    
                      </div>

                      <div class="modal-body relative p-4 ">
                          <div> Settings</div>
                          
                          <div className=' flex text-sm mt-3 content-around'>Name 
                            <input type="text" className='mt-1 block w-4/5 border border-grey-500 shadow-sm ml-3'></input> 
                          </div> 
                          <div className=' flex text-sm mt-3 content-around'>Scope 
                            <select className='mt-1 block w-4/5 border border-grey-500 shadow-sm ml-3'>
                                <option>Global</option>
                                <option>Local</option>
                            </select>
                          </div>
                          <div className=' flex text-sm mt-3 content-around'>Field Type 
                            <select className='mt-1 block w-4/5 border border-grey-500 shadow-sm ml-3 text-sm'>
                              <option>Yes/No</option>
                              <option>Text</option>
                              <option>Date</option>
                              <option>Number</option>
                              <option>Select</option>
                              <option>Multi-Select</option>
                          
                            </select> 
                          </div>
                          <div className=' flex text-sm mt-3 content-around'>Field Group 
                            <select className='mt-1 block w-4/5 border border-grey-500 shadow-sm ml-3'>
                              <option>Global</option>
                            </select>
                          </div>

                          <div className='flex text-sm mt-3 content-around'>Quick Search
                            
                            <input type="checkbox" id="quickSearch" name="quickSearch" value="quick" class="border-1 border-grey-300 text-blue-500 shadow-sm focus:border-blue-300 checked:bg-blue-500 ml-3 mt-1" />
                          
                          </div>

                          <div className='flex text-sm mt-3 content-around'>Include Family (tagging)
                            
                            <input type="checkbox" id="includeFamily" name="includeFamily" value="include" class="border-1 border-grey-300 text-blue-500 shadow-sm focus:border-blue-300 checked:bg-blue-500 ml-3 mt-1" />
                          
                          </div>

                          <div className='flex justify-end mt-8'>
                            <button className='border border-grey-200 py-1 px-2.5 mr-2 text-blue-600'> Cancel </button>
                            <button className='border border-grey-200 py-1 px-2.5 bg-blue-500 text-white'> Update </button>
                          </div>

                      </div>
                  </AddField>
{/* ----------END ADD FIELD POPUP--------- */}


{/* ----------MODIFY FIELDS POPUP--------- */}
            <div className='levels mt-4'>
              <div className='global-section border-b text-left py-3 justify-between flex'>
              <div className='justify-start space-x-4 flex'>
                <div className=''><i class="fa-solid fa-bars"></i></div>
                    <div>Global <span className='rounded bg-blue-500 text-white px-1.5 py-.5 text-sm ml-1'>3</span></div>
              </div>
                  <div className=''> 
                      <button className='mr-3'><i class="fa-regular fa-eye"></i></button>
                      <button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button>
                      <button className='mr-3'><i class="fa-solid fa-angle-down"></i></button>
  
                  </div>
              </div>
              <div className='global-section border-b text-left py-3 justify-between flex'>
              <div className='justify-start space-x-4 flex'>
                <div className=''><i class="fa-solid fa-bars"></i></div>
                    <div>Private <span className='rounded bg-blue-500 text-white px-1.5 py-.5 text-sm ml-1'>4</span></div>
              </div>
                  <div className='inline-flex'> 
                      <button className='mr-3'><i class="fa-regular fa-eye"></i></button>
                      <button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button>
                      <button className='mr-3'><i class="fa-solid fa-angle-down"></i></button>
  
                  </div>
              </div>
              <div className='global-section border-b text-left py-3 justify-between flex'>
              <div className='justify-start space-x-4 flex'>
                <div className=''><i class="fa-solid fa-bars"></i></div>
                    <div>System <span className='rounded bg-blue-500 text-white px-1.5 py-.5 text-sm ml-1'>7</span></div>
              </div>
                  <div className='inline-flex'> 
                      <button className='mr-3'><i class="fa-regular fa-eye"></i></button>
                      <button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button>
                      <button className='mr-3'><i class="fa-solid fa-angle-down"></i></button>
  
                  </div>
              </div>
  
            </div>
          </div>
          </Popup>
{/* ----------END MODIFY FIELDS POPUP--------- */}


  
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
      </div>
    
  );
}

export default App;