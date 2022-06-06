import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import EditField from './EditField';


//import './AddField.css'

function ExpandGroup(props) {
  const [buttonEditField, setButtonEditField] = useState(false); 
  
  

    return (props.trigger) ? (
      <div>
      
      <div className='mt-1 ml-4 flex justify-between'>
                            <div className=''><span className=''><i className="fa-solid fa-bars mr-3"></i></span>USER CREATED Field 1</div>
                            <div>Yes/No</div>
                            <div><i className="fa-solid fa-user-tag"></i></div>
                            <div>By: Claire Briley</div>
                            <div className=''>
                              <Tooltip title="Edit" arrow><button onClick={() => setButtonEditField (true)} className='mr-3'><i className="fa-solid fa-pencil"></i></button></Tooltip>
                              <Tooltip title="Visiblity" arrow><button className='mr-3'><i className="fa-regular fa-eye"></i></button></Tooltip>
                              <Tooltip title="Move to Top" arrow><button className='mr-3'><i className="fa-solid fa-arrow-up"></i></button></Tooltip>
                              
                            </div>
                            
                        </div>
                        <EditField trigger={buttonEditField} setTrigger= {setButtonEditField}/>
                        

    
</div>

                      
    ) :"";
  }

export default ExpandGroup