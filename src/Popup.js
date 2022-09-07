import { Tooltip } from '@mui/material';
import React from 'react';
import './Popup.css';
import { useState } from 'react';
import AddField from './AddField';
import AddGroup from './AddGroup';
import DeleteGroup from './DeleteGroup';
import EditGroup from './EditGroup';
import { Groups } from './Groups';
//import {userfields} from './Fields';
//import ExpandGroup from './ExpandGroup';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {orderBy, range} from "lodash";
import EditField from './EditField';
//import { userfields } from './Fields';

function Popup(props) {
  const [state, changeState] = useState(Groups);
  const [buttonEditField, setButtonEditField] = useState(false);

  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonAddField, setButtonAddField] = useState(false);
  const [buttonAddGroup, setButtonAddGroup] = useState(false);
  const [buttonDeleteGroup, setButtonDeleteGroup] = useState(false);
  const [buttonEditGroup, setButtonEditGroup] = useState(false);
 
  //const [buttonExpandGroup, setButtonExpandGroup] = useState(false);

  //Expanding functionality

  // const Accordion = ({ title, children, index }) => {
  //   //const [isOpen, setOpen] = React.useState(false);

  //   return (
  //     <div
  //       className={`accordion-title ${groupRender.expanded ? 'open' : ''}`}
  //     >
      
  //       <div>{title}</div>
  //       <div
  //         className={`accordion-item ${
  //           !groupRender.expanded ? 'collapsed' : ''
  //         }`}
  //       >
  //         <div>
  //           <div className="accordion-content">{children}</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  

  //Drag and Drop functionality

  const [characters, updateCharacters] = useState(Groups);

  const groupRender = orderBy(characters, "position").map ((item, index)=>(
    
   <Draggable draggableId={item.id.toString()} index ={item.position} key={item.id}>
      {(provided) =>(
        
      <div>
          <div className="global-section border-b text-left py-3 justify-between flex"
          {...provided.draggableProps} ref= {provided.innerRef}>
          <div className="justify-start space-x-4 flex">
            <div className="" {...provided.dragHandleProps}>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div>{item.name}
              <span className="rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-2">
                {item.count}
              </span>
            </div>
            
          </div>
          <div className="inline-flex" //item={item.id}
          >
            {item.userCreated === 2 ? (
              <Tooltip>
                <button onClick={() =>setButtonEditGroup(true) } className="mr-3">
                  <i class="fa-solid fa-pencil"></i>
                </button>
              </Tooltip>
            ) : null}
      
            {item.userCreated === 2 ? (
              <Tooltip title="Delete" arrow>
                <button onClick={() => setButtonDeleteGroup(true) } className="mr-3">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </Tooltip>
            ) : null}
      
            <Tooltip title="Visiblity" arrow>
              <button
                key={index}
                className="mr-3 {}"
                onClick={() =>toggleEyeActiveG(index) }

                >
                {toggleEyeG(index)}
              </button>
            </Tooltip>
      
            <Tooltip title="Move to Top" arrow>
              <button className="mr-3" onClick={() => move(index, 0)} >
                <i class="fa-solid fa-arrow-up"></i>
              </button>
            </Tooltip>
      
            <button
              key={item.id}
              className="mr-3"
              onClick={() => setIsOpen((o) => !o)}
              
            
              //onChange={() => toggleArrowActiveG(item.index)}
              >
           
              {isOpen ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
            </button>
            
          </div>
          
        </div>
        {item.fields.map((d, i) => (
          <Accordion  open={isOpen}>

          <ul key={i}>
            <li
            {...provided.draggableProps} ref= {provided.innerRef}>
            <div className="mt-1 ml-4 flex justify-between border-b pb-2" {...provided.dragHandleProps}>
           
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
               onClick={() => setButtonEditField(true)}
                className="mr-3"
              >
                <i class="fa-solid fa-pencil"></i>
              </button>
            </Tooltip>
            <Tooltip title="Visiblity" arrow>
              <button
                key={d.index}
                className="mr-3"
                onClick={() => toggleEyeActiveF(index)}
              >
              {toggleEyeF(index)}
              </button>
            </Tooltip>
            <Tooltip title="Move to Top" arrow>
              <button className="mr-3" onClick={() => move(index, 0)}>
                <i class="fa-solid fa-arrow-up"></i>
              </button>
            </Tooltip>
          </div>
            </div>
   
            <div className="mt-2">
                     <EditField
                       trigger={buttonEditField}
                       setTrigger={setButtonEditField}
                />
                   </div>

          </li>
          </ul>
            
          </Accordion>
        ))}
      </div>
     


      )}
      
   </Draggable>
   
  ));
  console.log(groupRender);
  const [isOpen, setIsOpen] = useState(false);
  
//DRAG AND DROP
const onDragEnd = (result) =>{
  const {destination, source} = result;
  console.log("drag result", destination, source);
  if (!destination || !source) {
    return;
  }
  if(destination.droppableId === source.droppableId && destination.index === source.index){
    return;
  }

const directionOfDrag = destination.index > source.index ? "DOWN": "UP";
console.log("Direction of drag", directionOfDrag)

//affected range
let affectedRange;
if (directionOfDrag === "DOWN"){
  affectedRange = range(source.index, destination.index + 1)
} else{
  affectedRange = range(destination.index, source.index)
}
 console.log("affected range", affectedRange);

//update position
 const reOrderedGroups = Groups.map(group =>{
  if(group.id === parseInt(result.draggableId)){
    console.log("condition 1", group);
    group.position = destination.index;
    return group;
  } else if (affectedRange.includes(group.position)){
    if (directionOfDrag === "DOWN") {
      group.position = group.position -1;
      console.log("condition 2.1", group);
      return group;
    } else if (directionOfDrag === "UP"){
      group.position = group.position +1;
      console.log("condition 2.2", group);
      return group;
    }
  } else {
    console.log("condition 3", group);
    return group;
  }
 });
//update Groups State
updateCharacters(reOrderedGroups);

  };
 //Move to top action
 const [itemsArr, setItemsArr] = useState(groupRender);
 console.log(groupRender)
 const move = (currentIndex, futureIndex) => {
  console.log("move to top")
  if (futureIndex !== -1 && futureIndex < itemsArr.length) {
    const tempItemsAray = [...itemsArr];
    console.log(tempItemsAray);
    const item = tempItemsAray[currentIndex];
    const movingItem = tempItemsAray[futureIndex];
    tempItemsAray[currentIndex] = movingItem;
    tempItemsAray[futureIndex] = item;
    console.log(movingItem);
    console.log(tempItemsAray);
    setItemsArr(tempItemsAray);
  }
};
  //Eyeicon toggle Groups

  function toggleEyeActiveG(index) {
    let arrayCopy = [...Groups];
console.log("eye toggle G", arrayCopy);
    arrayCopy[index].toggled
      ? (arrayCopy[index].toggled = false)
      : (arrayCopy[index].toggled = true);

    changeState({ ...state, Groups: arrayCopy });
  }
  function toggleEyeG(index) {
    if (Groups[index].toggled) {
      return <i className="fa-regular fa-eye-slash"></i>;
    } else {
      return <i className="fa-regular fa-eye"></i>;
    }
  }

   // Toggle Eye Function Fields

   function toggleEyeActiveF(index) {
    let arrayCopyF = {...Groups, fields : {...Groups.fields}};
console.log("field arr", arrayCopyF)
    arrayCopyF[index].toggled
      ? (arrayCopyF[index].toggled = false)
      : (arrayCopyF[index].toggled = true);

    changeState({ ...state, userfields: arrayCopyF });
  }

  function toggleEyeF(index) {
    if (Groups[index].toggled) {
      return <i className="fa-regular fa-eye-slash"></i>;
    } else {
      return <i className="fa-regular fa-eye"></i>;
    }
  }

  //Arrowicon toggle
  // function toggleArrowActiveG(index) {
  //   let arrayCopy = [...Groups];

  //   arrayCopy[index].expanded
  //     ? (arrayCopy[index].expanded = false)
  //     : (arrayCopy[index].expanded = true);

  //   changeState({ ...state, Groups: arrayCopy });
  // }

  // function toggleArrowG(index) {
  //   if (Groups[index].expanded) {
  //     return <i class="fa-solid fa-angle-up"></i>;
  //   } else {
  //     return <i class="fa-solid fa-angle-down"></i>;
  //   }
  // }

 
  //console.log(itemsArr)
  const Accordion = ({ open, children }) => {
    return <div className={open ? '' : 'hidden'}>{children}</div>;
    
  };
  
  return props.trigger ? (
    <div className="popup fixed flex top-0 left-0 w-full h-screen justify-center items-center">
      <div className="popup-inner relative bg-white w-full max-w-2xl p-4">
        <Tooltip title="Close" arrow>
          <button
            className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4"
            onClick={() => props.setTrigger(false)}
          >
            X
          </button>
        </Tooltip>

        <div className="overflow-auto" trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="flex flex-shrink-0 items-center justify-between p-1 border-b border-gray-200">
            <h5 className="text-lg mb-2 font-medium leading-normal text-gray-800">
              Modify Fields
            </h5>
          </div>
          <div className="modal-body relative p-4 ">
            <div className="add-btns flex justify-end mt-1">
              <Tooltip title="Add Group" arrow>
                <button
                  onClick={() => setButtonAddGroup(true)}
                  className=" mr-3"
                >
                  <span>
                    <i class="fa-solid fa-layer-group fa-lg mr-1"></i>
                  </span>{' '}
                  Add Group
                </button>
              </Tooltip>

              <Tooltip title="Add Field" arrow>
                <button onClick={() => setButtonAddField(true)} className=" ">
                  <span>
                    <i class="fa-solid fa-bars fa-lg mr-1"></i>
                  </span>{' '}
                  Add Field
                </button>
              </Tooltip>
            </div>
            <div className="wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId='characters'>
                {(provided) => (
                  <div>
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {groupRender}
                    
                    {provided.placeholder }
                    
                  </div>
                 
                  </div>
                )}
                

              </Droppable>
            </DragDropContext>
            </div>

            <AddGroup trigger={buttonAddGroup} setTrigger={setButtonAddGroup} />
            <AddField trigger={buttonAddField} setTrigger={setButtonAddField} />

            {/*<ExpandGroup trigger={buttonExpandGroup} setTrigger= {setButtonExpandGroup}/>*/}
            <DeleteGroup
              trigger={buttonDeleteGroup}
              setTrigger={setButtonDeleteGroup}
            />
            <EditGroup
              trigger={buttonEditGroup}
              setTrigger={setButtonEditGroup}
            />
          </div>
        </div>

        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
