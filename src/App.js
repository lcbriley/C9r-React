
import './App.css';
import './babel.config.js';
import { useState } from 'react';
import {Helmet} from "react-helmet";
import Popup from './Popup';
import { Groups } from './Groups';
import { Tooltip } from '@mui/material';



//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'






function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const FieldGroup = ({ field }) => {
    
    return (
     <div >
        <div>
          <div className="flex flex-row p-2 bg-white-200 ">
            
            
            <div className="inline-flex" //item={item.id}
            >
              {field.userCreated === 2 ? (
                <Tooltip>
                  <button  className="mr-3">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                </Tooltip>
              ) : null}
        
              {field.userCreated === 2 ? (
                <Tooltip title="Delete" arrow>
                  <button  className="mr-3">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </Tooltip>
              ) : null}
        
              <Tooltip title="Visiblity" arrow>
                <button
                  key={field.index}
                  className="mr-3"
                  
  
                  >
                  {/*{toggleEyeG(index)}*/}
                </button>
              </Tooltip>
        
              <Tooltip title="Move to Top" arrow>
                <button className="mr-3"  >
                  <i class="fa-solid fa-arrow-up"></i>
                </button>
              </Tooltip>
        
             {/* <button
                key={f.id}
                className="mr-3"
                onClick={() => setIsOpen((o) => !o)}
                
              
                //onChange={() => toggleArrowActiveG(item.index)}
                >
             
                {isOpen ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
              </button>*/}
              
            </div>
              <button onClick={() => setIsOpen((o) => !o)}>
              {isOpen ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
              </button>
           
          </div>
  
          
        </div>
     <div>
          <Accordian open={isOpen} >
                <div className="flex-1 flex flex-col">
                  {field.fields.map((d, idx) => (
                    <ul key={idx}>
                    <li
                    //{...provided.draggableProps} ref= {provided.innerRef}
                    >
                    <div className="mt-1 ml-4 flex justify-between border-b pb-2"
                     //{...provided.dragHandleProps}
                     >
                   
                  <div>
                      <span className="">
                        <i class="fa-solid fa-bars mr-3"></i>
                      </span>
                      {d.fieldName}
                  </div>
                  
                  <div>{d.fieldType || ''}</div>
                 
           
                  <div>
                    {d.familyTagging === false ? (
                      ' '
                    ) : (
                      <i class="fa-solid fa-user-tag"></i>
                    )}
                  </div>
                  <div>By: {d.user}</div>
                  <div className="" 
                  //item={itemArr.id}
                  >
                    <Tooltip title="Edit" arrow>
                      <button
                       //onClick={() => setButtonEditField(true)}
                        className="mr-3"
                      >
                        <i class="fa-solid fa-pencil"></i>
                      </button>
                    </Tooltip>
                    <Tooltip title="Visiblity" arrow>
                      <button
                        key={d.index}
                        className="mr-3"
                        //onClick={() => toggleEyeActiveF(index)}
                      >
                    {/* {toggleEyeF(index)}*/}
                     {d.toggledF === false ? (
                        <i className="fa-regular fa-eye"></i>
                      ) : (
                        <i className="fa-regular fa-eye-slash"></i>
                      )}
                      </button>
                    </Tooltip>
                    <Tooltip title="Move to Top" arrow>
                      <button className="mr-3" 
                      //onClick={() => move(index, 0)}
                      >
                        <i class="fa-solid fa-arrow-up"></i>
                      </button>
                    </Tooltip>
                  </div>
                    </div>
           
                    <div className="mt-2">
                             {/*<EditField
                               trigger={buttonEditField}
                               setTrigger={setButtonEditField}
                        />*/}
                           </div>
        
                  </li>
                  </ul>
                  ))}
                </div>
              </Accordian>
     </div>
     </div>
    );
  };
  
  
  const Accordian = ({ open, children }) => {
    return <div className={open ? 'flex' : 'hidden'}>{children}</div>;
  };


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
        
      
    

        </div>
    
  
  
        
  
         );
}

export default App;


// {Groups.map((field, index) => (
//   <div key={index}>
//     <h2>Name: {field.name}</h2>
//     {/* { console.log(Groups)}*/}
//     {field.fields.map((d, i) => (
//       <div key={i}>
//         <h2>FN: {d.fieldName}</h2>

//       {/*  { console.log(d.fieldName)}*/}
//       </div>
      
//     ))}
//     {/* { console.log(field.fields)}*/}
    
//     <hr />
//   </div>
//     ))}



// {item.fields.map((d, id) => (
//   <Accordion  open={isOpen}>

//   <ul key={item.id}>
//     <li
//     {...provided.draggableProps} ref= {provided.innerRef}>
//     <div className="mt-1 ml-4 flex justify-between border-b pb-2" {...provided.dragHandleProps}>
   
//   <div>
//       <span className="">
//         <i class="fa-solid fa-bars mr-3"></i>
//       </span>
//       {d.fieldName}
//   </div>
  
//   <div>{d.fieldType || ''}</div>
 

//   <div>
//     {d.familyTagging === false ? (
//       ' '
//     ) : (
//       <i class="fa-solid fa-user-tag"></i>
//     )}
//   </div>
//   <div>By: {d.user}</div>
//   <div className="" 
//   //item={itemArr.id}
//   >
//     <Tooltip title="Edit" arrow>
//       <button
//        onClick={() => setButtonEditField(true)}
//         className="mr-3"
//       >
//         <i class="fa-solid fa-pencil"></i>
//       </button>
//     </Tooltip>
//     <Tooltip title="Visiblity" arrow>
//       <button
//         key={d.index}
//         className="mr-3"
//         onClick={() => toggleEyeActiveF(index)}
//       >
//     {/* {toggleEyeF(index)}*/}
//      {d.toggledF === false ? (
//         <i className="fa-regular fa-eye"></i>
//       ) : (
//         <i className="fa-regular fa-eye-slash"></i>
//       )}
//       </button>
//     </Tooltip>
//     <Tooltip title="Move to Top" arrow>
//       <button className="mr-3" onClick={() => move(index, 0)}>
//         <i class="fa-solid fa-arrow-up"></i>
//       </button>
//     </Tooltip>
//   </div>
//     </div>

//     <div className="mt-2">
//              <EditField
//                trigger={buttonEditField}
//                setTrigger={setButtonEditField}
//         />
//            </div>

//   </li>
//   </ul>
    
//   </Accordion>
// ))};