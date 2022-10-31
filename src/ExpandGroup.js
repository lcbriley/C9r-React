import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import EditField from './EditField';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Groups } from './Groups';
import { userfields } from './Fields';
import {orderBy, range} from "lodash";

function ExpandGroup(props) {
  const [buttonEditField, setButtonEditField] = useState(false);

  const [state, changeState] = useState(userfields);

  // Drag and drop functionality
  const [fields, updateFields] = useState(userfields);
  const fieldRender = orderBy(fields, "positionF").map ((item, d)=>(
    <Draggable draggableId={item.id.toString()} index ={item.position} key={item.id}>
       {(provided) =>(
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
             onClick={() => toggleEyeActive(d.index)}
           >
             {d.toggled === true ? (
               <i className="fa-regular fa-eye-slash"></i>
             ) : (
               <i className="fa-regular fa-eye"></i>
             )}
           </button>
         </Tooltip>
         <Tooltip title="Move to Top" arrow>
           <button className="mr-3" onClick={() => move(d.index, 0)}>
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
       )}
       
    </Draggable>
 
   ));

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
updateFields(reOrderedGroups);

  };




 

  // Toggle Eye Function

  function toggleEyeActive(index) {
    let arrayCopy = [...userfields];

    arrayCopy[index].toggled
      ? (arrayCopy[index].toggled = false)
      : (arrayCopy[index].toggled = true);

    changeState({ ...state, userfields: arrayCopy });
  }
  

  //Move to Top
  const [fieldsArr, setFieldsArr] = useState(userfields);

  const move = (currentIndex, futureIndex) => {
    if (futureIndex !== -1 && futureIndex < fieldsArr.length) {
      const tempItemsAray = [...fieldsArr];
      const item = tempItemsAray[currentIndex];
      const movingItem = tempItemsAray[futureIndex];
      tempItemsAray[currentIndex] = movingItem;
      tempItemsAray[futureIndex] = item;
      setFieldsArr(tempItemsAray);
      console.log('move function');
    }
  };

 

  return props.trigger ? (
    <div className="wrapper">
    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId='FIELDS'>
      {(provided) => (
        <ul ref={provided.innerRef} {...provided.droppableProps}>
        {fieldRender}
       { console.log(fieldRender)}
        {provided.placeholder }
        </ul>
      )}
      

    </Droppable>
  </DragDropContext>
             </div>
  ) : (
    ''
  );
}

export default ExpandGroup;