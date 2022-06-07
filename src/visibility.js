import React, { Component } from 'react';
//import { render } from 'react-dom';
import ExpandGroup from './ExpandGroup';
//import handleMoveTop from './moveTop';
import './style.css';
//import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



 
//const [buttonDeleteGroup, setButtonDeleteGroup] = useState(false);

class Visiblity extends Component {
 
  
  
  constructor(props) {
    super(props);
   
    this.state = {
        isToggleOn: true,
        activeCollapse: this.Groups,
        characters: "",
        updateCharacters: "",
        editGroup: '',
        MoveTop: "",
        visMoveTop: this.Groups,
        eye: <i className="fa-regular fa-eye"></i>,
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
          
          
        ],
        
    };
    
    this.changeEye = this.changeEye.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
   
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

 

  
  handleOnDragEnd  (result) {
    
    if (!result.destination){ return;}
    
    const items = Array.from(this.state.characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
  
    //this.state.updateCharacters(items);
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



handleMoveTop = () =>{
  let {visMoveTop } = this.Groups.id;
    
  if (visMoveTop) {
    this.setState({MoveTop: <button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button>});
} else {
  this.setState({MoveTop:''});
}
}



  moreInfoClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
  }
  
  render() {
    
    
     
    return (
      <div>
        <div className="sidebar-nav">
          <div className="sidebar-nav-menu">

            
          <div className={`sidebar-nav-menu-item block ${this.state.activeCollapse === this.state.Groups.id ? 'item-active' : ''}`}  >
          <div className="sidebar-nav-menu-item-head relative my-1">
            <span className="sidebar-nav-menu-item-head-title">
            <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                  {this.state.Groups.map(({id, name, count}, index) => {
                    return (
            <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
              <li className='' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div className='global-section flex border-b text-left py-3 justify-between'>
              <div className='justify-start space-x-3 flex'>
                <div className='mr-1'><i class="fa-solid fa-bars"></i></div>
                <div> {name} <span className='rounded bg-gradient-to-r from-dark-blue to-light-blue text-white px-1.5 py-.5 text-sm ml-1'>{count}</span></div>
              </div>
              <div className='buttons flex inline-block text-right justify-end'> 
                  
              
              
              <Tooltip ><button className='mr-3' ><i className="fa-solid fa-pencil"></i></button></Tooltip>
              <Tooltip title="Delete" arrow><button  className='mr-3'><i className="fa-solid fa-trash-can"></i></button></Tooltip>
              <Tooltip title="Visiblity" arrow><button onClick={this.changeEye} className='mr-3'>{ this.state.isToggleOn ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> } </button></Tooltip>

              <Tooltip title="Move to Top" arrow>{this.handleMoveTop ? <button className='mr-3'><i class="fa-solid fa-arrow-up"></i></button> :''}</Tooltip>
            
              <Tooltip title="Expand" arrow><button onClick={() => this.handleExpandCollaps(this.state.Groups.id)} data-id= {this.state.Groups.id} className='mr-3'><i className="fa-solid fa-angle-down"></i></button></Tooltip>

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