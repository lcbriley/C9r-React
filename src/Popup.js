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
import ExpandGroup from './ExpandGroup';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Popup(props) {
  const [state, changeState] = useState(Groups);

  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonAddField, setButtonAddField] = useState(false);
  const [buttonAddGroup, setButtonAddGroup] = useState(false);
  const [buttonDeleteGroup, setButtonDeleteGroup] = useState(false);
  const [buttonEditGroup, setButtonEditGroup] = useState(false);
  //const [buttonEditField, setButtonEditField] = useState(false);
  //const [buttonDeleteField, setButtonDeleteField] = useState(false);
  //const [buttonExpandGroup, setButtonExpandGroup] = useState(false);

  //Expanding functionality

  const Accordion = ({ title, children, index }) => {
    //const [isOpen, setOpen] = React.useState(false);

    return (
      <div
        className={`accordion-title ${Groups[index].expanded ? 'open' : ''}`}
      >
        <div>{title}</div>
        <div
          className={`accordion-item ${
            !Groups[index].expanded ? 'collapsed' : ''
          }`}
        >
          <div>
            <div className="accordion-content">{children}</div>
          </div>
        </div>
      </div>
    );
  };

  //Drag and Drop functionality

  const [characters, updateCharacters] = useState(Groups);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  //Eyeicon toggle

  function toggleEyeActive(index) {
    let arrayCopy = [...Groups];

    arrayCopy[index].toggled
      ? (arrayCopy[index].toggled = false)
      : (arrayCopy[index].toggled = true);

    changeState({ ...state, Groups: arrayCopy });
  }
  function toggleEye(index) {
    if (Groups[index].toggled) {
      return <i className="fa-regular fa-eye-slash"></i>;
    } else {
      return <i className="fa-regular fa-eye"></i>;
    }
  }

  //Arrowicon toggle
  function toggleArrowActive(index) {
    let arrayCopy = [...Groups];

    arrayCopy[index].expanded
      ? (arrayCopy[index].expanded = false)
      : (arrayCopy[index].expanded = true);

    changeState({ ...state, Groups: arrayCopy });
  }

  function toggleArrow(index) {
    if (Groups[index].expanded) {
      return <i class="fa-solid fa-angle-up"></i>;
    } else {
      return <i class="fa-solid fa-angle-down"></i>;
    }
  }

  //Move to top action
  const [itemsArr, setItemsArr] = useState(Groups);

  const move = (currentIndex, futureIndex) => {
    if (futureIndex !== -1 && futureIndex < itemsArr.length) {
      const tempItemsAray = [...itemsArr];
      const item = tempItemsAray[currentIndex];
      const movingItem = tempItemsAray[futureIndex];
      tempItemsAray[currentIndex] = movingItem;
      tempItemsAray[futureIndex] = item;
      setItemsArr(tempItemsAray);
    }
  };
  //console.log(itemsArr)

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
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <ul
                      className="characters"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {itemsArr.map(
                        (
                          {
                            f,
                            idx,
                            id,
                            name,
                            count,
                            userCreated,
                            fieldGroupId,
                          },
                          index
                        ) => {
                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <li
                                  key={index}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Accordion
                                    title={
                                      <div className="global-section border-b text-left py-3 justify-between flex">
                                        <div className="justify-start space-x-4 flex">
                                          <div className="">
                                            <i class="fa-solid fa-bars"></i>
                                          </div>
                                          <div>
                                            {' '}
                                            {name}{' '}
                                            <span className="rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-1">
                                              {count}
                                            </span>
                                          </div>
                                          <div>{fieldGroupId}</div>
                                        </div>
                                        <div
                                          className="inline-flex"
                                          item={itemsArr.id}
                                        >
                                          {userCreated === 2 ? (
                                            <Tooltip>
                                              <button
                                                onClick={() =>
                                                  setButtonEditGroup(true)
                                                }
                                                className="mr-3"
                                              >
                                                <i class="fa-solid fa-pencil"></i>
                                              </button>
                                            </Tooltip>
                                          ) : null}

                                          {userCreated === 2 ? (
                                            <Tooltip title="Delete" arrow>
                                              <button
                                                onClick={() =>
                                                  setButtonDeleteGroup(true)
                                                }
                                                className="mr-3"
                                              >
                                                <i class="fa-solid   fa-trash-can"></i>
                                              </button>
                                            </Tooltip>
                                          ) : null}

                                          <Tooltip title="Visiblity" arrow>
                                            <button
                                              key={index}
                                              className="mr-3"
                                              onClick={() =>
                                                toggleEyeActive(index)
                                              }
                                            >
                                              {toggleEye(index)}
                                            </button>
                                          </Tooltip>

                                          <Tooltip title="Move to Top" arrow>
                                            <button
                                              className="mr-3"
                                              onClick={() => move(index, 0)}
                                            >
                                              <i class="fa-solid fa-arrow-up"></i>
                                            </button>
                                          </Tooltip>

                                          <button
                                            key={index}
                                            className="mr-3"
                                            onClick={() =>
                                              toggleArrowActive(index)
                                            }
                                          >
                                            {toggleArrow(index)}{' '}
                                          </button>
                                        </div>
                                      </div>
                                    }
                                    index={index}
                                  >
                                    <div className="mt-2">
                                      <ExpandGroup trigger={Accordion} />
                                    </div>
                                  </Accordion>
                                </li>
                              )}
                            </Draggable>
                          );
                        }
                      )}
                      {provided.placeholder}
                    </ul>
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
