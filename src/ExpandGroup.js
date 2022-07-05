import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import EditField from './EditField';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


//import './AddField.css'

function ExpandGroup(props) {
  const [buttonEditField, setButtonEditField] = useState(false); 
  
  const [state, changeState] = useState({
  userfields: [
    {
      id: "1",
      fieldName: "USER CREATED Field 1",
      scope: "Global",
      fieldType: "Yes/No",
      user: "Claire Briley",
      fieldGroup: "USER CREATED",
      familyTagging: true,
      quickSearch: true,
      toggled: false,
    },
    {
      id: "2",
      fieldName: "USER CREATED Field 2",
      scope: "Global",
      fieldType: "Date",
      user: "Claire Briley",
      fieldGroup: "System",
      familyTagging: false,
      quickSearch: true,
      toggled: false,
    },
    // {
    //   id: "3",
    //   fieldName: "USER CREATED Field 3",
    //   scope: "Global",
    //   fieldType: "Number",
    //   user: "Claire Briley",
    //   fieldGroup: "Private",
    //   familyTagging: true,
    //   quickSearch: true,
    //   toggled: false,
    // }
  ]});

// Drag and drop functionality 
  const [fields, updateFields] = useState(state.userfields);
 
  function handleOnDragEndFields(result) {
   if (!result.destination) return;

   const items = Array.from(fields);
   const [reorderedItem] = items.splice(result.source.index, 1);
   items.splice(result.destination.index, 0, reorderedItem);

   updateFields(items);
 }

// Toggle Eye Function

  function toggleEyeActive(index){
    let arrayCopy = [...state.userfields];
  
    arrayCopy[index].toggled
    ? (arrayCopy[index].toggled= false)
    : (arrayCopy[index].toggled= true);
  
  changeState({...state, userfields:arrayCopy});
  
  }



    return (props.trigger) ? (
      
<div className="wrapper">
<DragDropContext onDragEnd={handleOnDragEndFields}>
<Droppable droppableId="fields">
{(provided) => (
<ul className="fields" {...provided.droppableProps} ref={provided.innerRef}>
{state.userfields.map(({id, fieldName, fieldType, familyTagging, user, toggled}, index) => {
return (
 
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li key={index} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className='mt-1 ml-4 flex justify-between border-b pb-2'>
       
          
           
              <div className=''><span className=''><i class="fa-solid fa-bars mr-3"></i></span>{fieldName}</div>
              <div>{fieldType || ""}</div>
              <div>{familyTagging === false ? " " : <i class="fa-solid fa-user-tag"></i>}</div>
              <div>By: {user}</div>
              <div className=''>
                <Tooltip title="Edit" arrow><button onClick={() => setButtonEditField (true)} className='mr-3'><i class="fa-solid fa-pencil"></i></button></Tooltip>
                <Tooltip title="Visiblity" arrow><button key = {index} className='mr-3' onClick={() => toggleEyeActive(index)}>{toggled === true ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i> }</button></Tooltip>
                <Tooltip title="Move to Top" arrow><button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button></Tooltip>
                
              </div>
          
         
         

    <EditField trigger={buttonEditField} setTrigger= {setButtonEditField}/>
    


</div>
        
    <div className='mt-2'>
  
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
        </DragDropContext>

</div>

                      
    ) :"";
  }

export default ExpandGroup


//       <div className='mt-1 ml-4 border-b pb-2'>
//                             {state.userfields.map((index =>{
//                               return (
                              
//                                <span className='flex justify-between'>
//                                   <div className=''><span className=''><i class="fa-solid fa-bars mr-3"></i></span>{state.userfields[0].fieldName}</div>
//                                   <div>{state.userfields[0].fieldType || ""}</div>
//                                   <div>{state.userfields[0].familyTagging === false ? "" : <i class="fa-solid fa-user-tag"></i>}</div>
//                                   <div>By: {state.userfields[0].user}</div>
//                                   <div className=''>
//                                     <Tooltip title="Edit" arrow><button onClick={() => setButtonEditField (true)} className='mr-3'><i class="fa-solid fa-pencil"></i></button></Tooltip>
//                                     <Tooltip title="Visiblity" arrow><button key = {index} className='mr-3' onClick={() => toggleEyeActive(index)}>{state.userfields[0].toggled === true ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i> }</button></Tooltip>
//                                     <Tooltip title="Move to Top" arrow><button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button></Tooltip>
                                    
//                                   </div>
//                                </span>
                             
//                               );
//                               }))}
    
//                         <EditField trigger={buttonEditField} setTrigger= {setButtonEditField}/>
                        

    
// </div>