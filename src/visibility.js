import React, { Component } from 'react';
//import { render } from 'react-dom';
import ExpandGroup from './ExpandGroup';
import './style.css';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


 
//const [buttonDeleteGroup, setButtonDeleteGroup] = useState(false);

class Visiblity extends Component {
 
  
  
  constructor(props) {
    super(props);
   
    this.state = {
        isToggleOn: true,
        activeCollapse: 'circulars',
        characters: 'Groups',
        eye: <i class="fa-regular fa-eye"></i>,
        Groups: [
  
          {
            id: "1",
            name: 'Global',
            count: 3,
        
          },
          {
            id: "2",
            name: 'Private',
            count: 4,
          },
          {
            id: "3",
            name: 'System',
            count: 7,
          },
          {
            id: "4",
            name: 'USER CREATED',
           count: 3,
          },
          
          
        ]
    };

    this.changeEye = this.changeEye.bind(this);
  }

  //changeEye = () => {
    //this.setState({eye: <i class="fa-regular fa-eye-slash"></i>});
   // this.setState(prevState => ({
   //   iover: !prevState.iover
   // }));
 // }

  changeEye() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

 handleOnDragEnd = (result) => {
   
    if (!result.destination) return;
  
    const items = Array.from(this.state.Groups);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
  
    this.state.updateCharacters(items);
  }


  handleExpandCollaps = (name) => {
    if (this.state.activeCollapse === name) {
      //If collapsiable is already visible and clicked on same then this will hide it
        this.setState({ activeCollapse: '' })
    } else {
        //To show collapsiable
        this.setState({ activeCollapse: name })
    }
  }

 
  
  render() {
    return (
      <div>
        <div className="sidebar-nav">
          <div className="sidebar-nav-menu">

            
          <div className={`sidebar-nav-menu-item block ${this.state.activeCollapse === "circulars" ? 'item-active' : ''}`} onClick={() => this.handleExpandCollaps("circulars")} data-id="circulars" >
          <div className="sidebar-nav-menu-item-head relative p-2.5 mb-1">
            <span className="sidebar-nav-menu-item-head-title">
            <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                  {this.state.Groups.map(({id, name, count}, index) => {
                    return (
            <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div className='global-section border-b text-left py-3 justify-between flex'>
              <div className='justify-start space-x-4 flex'>
                <div className=''><i class="fa-solid fa-bars"></i></div>
                <div> {name} <span className='rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-1'>{count}</span></div>
              </div>
              <div className='flex inline-block text-right justify-end'> 
                  
                <Tooltip ><button className='mr-3'><i class="fa-solid fa-pencil"></i></button></Tooltip>
                <Tooltip title="Delete" arrow><button  className='mr-3'><i class="fa-solid fa-trash-can"></i></button></Tooltip>
                <Tooltip title="Visiblity" arrow><button onClick={this.changeEye} className='mr-3'>{ this.state.isToggleOn ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i> } </button></Tooltip>
                <Tooltip title="Move to Top" arrow><button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button></Tooltip>
                <Tooltip title="Expand" arrow><button  className='mr-3'><i class="fa-solid fa-angle-down"></i></button></Tooltip>

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
                </DragDropContext>
            </span>
            
          </div>
          <div className="sidebar-nav-menu-item-body"><ExpandGroup trigger={this.handleExpandCollaps} /></div>
        </div>




       

         

          </div>
        </div>
      </div>
    );
  }
}

export default Visiblity

{/*render(<Visiblity />, document.getElementById('root'));*/}
