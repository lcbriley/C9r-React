import { Tooltip } from '@mui/material';
import React from 'react'

import './Popup.css'
import { useState } from 'react';
import AddField from './AddField';
import AddGroup from './AddGroup';
import DeleteGroup from './DeleteGroup';
import EditGroup from './EditGroup';
//import EditField from './EditField';
//import DeleteField from './DeleteField';
import ExpandGroup from './ExpandGroup';
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Visiblity from './visibility';












function Popup(props) {



  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonAddField, setButtonAddField] = useState(false);
  const [buttonAddGroup, setButtonAddGroup] = useState(false);
  const [buttonDeleteGroup, setButtonDeleteGroup] = useState(false);
  const [buttonEditGroup, setButtonEditGroup] = useState(false);
  //const [buttonEditField, setButtonEditField] = useState(false);
  //const [buttonDeleteField, setButtonDeleteField] = useState(false);
  const [buttonExpandGroup, setButtonExpandGroup] = useState(false);





 // const [characters, updateCharacters] = useState(Groups);


  //function handleOnDragEnd(result) {
  //  if (!result.destination) return;

  //  const items = Array.from(characters);
  //  const [reorderedItem] = items.splice(result.source.index, 1);
  //  items.splice(result.destination.index, 0, reorderedItem);

   // updateCharacters(items);
 // }

 
  

  return (props.trigger) ? (
   
    <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
      <div className='popup-inner relative bg-white w-full max-w-2xl p-4'>
          <Tooltip title="Close" arrow><button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button></Tooltip>

            <div className="" trigger={buttonPopup} setTrigger= {setButtonPopup}>
      
              <div className="flex flex-shrink-0 items-center justify-between p-1 border-b border-gray-200">
                <h5 className="text-lg mb-2 font-medium leading-normal text-gray-800" >Modify Fields</h5>    
              </div>
                <div className="modal-body relative p-4 ">
                  <div className='add-btns flex justify-end mt-1'>


                    <Tooltip title="Add Group" arrow>
                      <button onClick={() => setButtonAddGroup (true)} className=' mr-3'><span><i class="fa-solid fa-layer-group fa-lg mr-1"></i></span> Add Group
                      </button>
                    </Tooltip>

                   


                    <Tooltip title="Add Field" arrow>
                      <button onClick={() => setButtonAddField (true)} className=' '><span><i class="fa-solid fa-bars fa-lg mr-1"></i></span> Add Field
                      </button>
                    </Tooltip>
                  </div>
                    
                    <Visiblity/>


                    <AddGroup trigger={buttonAddGroup} setTrigger= {setButtonAddGroup}/>
                    <AddField trigger={buttonAddField} setTrigger= {setButtonAddField}/>

                    {/*<DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                  {characters.map(({id, name, thumb, count}, index) => {
                    return (
                     
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              
                              <div className='global-section border-b text-left py-3 justify-between flex'>
                          <div className='justify-start space-x-4 flex'>
                            <div className=''><i class="fa-solid fa-bars"></i></div>
                              <div> {name} <span className='rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-1'>{count}</span></div>
                          </div>
                            <div className='inline-flex'> 
                              <Tooltip title="Visiblity" arrow><button className='mr-3'onClick={() => props.setTrigger('fa-eye-slash')}><i class="fa-regular fa-eye"></i></button></Tooltip>
                              <Tooltip title="Move to Top" arrow><button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button></Tooltip>
                              <Tooltip title="Expand" arrow><button className='mr-3' onClick={() => setButtonExpandGroup (true)}><i class="fa-solid fa-angle-down"></i></button></Tooltip>
                            </div>
                        </div>
                            </li>



                         



                            
                          )}
                        </Draggable>
            
                        
                                );
                              })}
                              {provided.placeholder}
                            </ul>
                          )}
                        </Droppable>
                            </DragDropContext>*/}
            

                    
                  {/*<div className='levels mt-4'>
                    <div className='global-section border-b text-left py-3 justify-between flex'>
                      <div className='justify-start space-x-4 flex'>
                        <div className=''><i class="fa-solid fa-bars"></i></div>
                          <div>Global <span className='rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-1'>3</span></div>
                      </div>
                      <div className=''> 
                        <Tooltip title="Visiblity" arrow><button className='mr-3'><i class="fa-regular fa-eye"></i></button></Tooltip>
                        <Tooltip title="Move to Top" arrow><button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button></Tooltip>
                        <Tooltip title="Expand" arrow><button className='mr-3'><i class="fa-solid fa-angle-down"></i></button></Tooltip>
        
                      </div>
                    </div>

                    <div className='global-section border-b text-left py-3 justify-between flex'>
                      <div className='justify-start space-x-4 flex'>
                        <div className=''><i class="fa-solid fa-bars"></i></div>
                          <div>Private <span className='rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-1'>4</span></div>
                      </div>
                      <div className='inline-flex'> 
                        <Tooltip title="Visiblity" arrow><button className='mr-3'><i class="fa-regular fa-eye"></i></button></Tooltip>
                        <Tooltip title="Move to Top" arrow><button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button></Tooltip>
                        <Tooltip title="Expand" arrow><button className='mr-3'><i class="fa-solid fa-angle-down"></i></button></Tooltip>
                      </div>
                    </div>

                    <div className='global-section border-b text-left py-3 justify-between flex'>
                      <div className='justify-start space-x-4 flex'>
                        <div className=''><i class="fa-solid fa-bars"></i></div>
                          <div>System <span className='rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-1'>7</span></div>
                      </div>
                      <div className='inline-flex'> 
                        <Tooltip title="Visiblity" arrow><button className='mr-3'><i class="fa-regular fa-eye"></i></button></Tooltip>
                        <Tooltip title="Move to Top" arrow><button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button></Tooltip>
                        <Tooltip title="Expand" arrow><button className='mr-3'><i class="fa-solid fa-angle-down"></i></button></Tooltip>
                      </div>
                    </div>

                    <div className='global-section border-b text-left py-3 justify-between flex'>
                      <div className='justify-start space-x-4 flex'>
                        <div className=''><i class="fa-solid fa-bars"></i></div>
                          <div>USER CREATED <span className='rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-1'>3</span></div>
                      </div>
                      <div className='flex inline-block text-right justify-end'> 
                          
                        <Tooltip ><button onClick={() => setButtonEditGroup (true)} className='mr-3'><i class="fa-solid fa-pencil"></i></button></Tooltip>
                        <Tooltip title="Delete" arrow><button onClick={() => setButtonDeleteGroup (true)} className='mr-3'><i class="fa-solid   fa-trash-can"></i></button></Tooltip>
                        <Tooltip title="Visiblity" arrow><button className='mr-3'><i class="fa-regular fa-eye"></i></button></Tooltip>
                        <Tooltip title="Move to Top" arrow><button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button></Tooltip>
                        <Tooltip title="Expand" arrow><button onClick={() => setButtonExpandGroup (true)} className='mr-3'><i class="fa-solid fa-angle-down"></i></button></Tooltip>
        
                      </div>

                            
                    </div>

  </div>*/}

                  <ExpandGroup trigger={buttonExpandGroup} setTrigger= {setButtonExpandGroup}/>
                  <DeleteGroup trigger={buttonDeleteGroup} setTrigger= {setButtonDeleteGroup}/>
                  <EditGroup trigger={buttonEditGroup} setTrigger= {setButtonEditGroup}/>
                </div>
          
          </div>


        {props.children}
      </div>
    </div>
  ) :"";
}

export default Popup


