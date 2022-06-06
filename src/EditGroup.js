import React from 'react'
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';


function EditGroup(props) {
  const [buttonEditGroup, setButtonEditGroup] = useState(false);
    return (props.trigger) ? (
      <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
        <div className='popup-inner relative bg-white w-full max-w-2xl '>
          <button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button>

          <div trigger={buttonEditGroup} setTrigger= {setButtonEditGroup}>
<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
  <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Edit: USER CREATED</h5>    
</div>

<div className='modal-body p-4'>

  <div className='flex flex-row'>
    <div className='basis-1/2 flex'>
      <div className=' text-sm font-semibold mt-1.5 mr-2'>Group Name:</div>
      <input type="text" className='mt-1 rounded w-1/2 border border-grey-500 shadow-sm h-7 p-1 focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'></input>
    </div>

    
    <div className='basis-1/2 flex justify-end'>
      <div className=' text-sm mt-1.5 mr-2'>Filter:</div>
      <input type="text" className='mt-1 rounded w-1/2 border border-grey-500 shadow-sm h-7 p-1 focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'></input>
    </div>        
    
  </div>

  <div className='mt-6 border border-grey-300 h-80'>
    <div className='border-b'>
        <div className='text-center p-2 font-semibold'>Field Selection</div>

        <div className='flex justify-between ml-3 mt-1 mb-3'>
          <input type="checkbox" id="includeFamily" name="includeFamily" value="include" className="border-1 border-grey-300 text-blue-500 shadow-sm focus:border-blue-300 checked:bg-blue-500 mt-1 mr-2" />
          <div>
            <button className=''><i className="fa-solid fa-arrow-down-a-z fa-lg mr-2 p-1"></i></button>
            <button><i className="fa-solid fa-arrow-down-z-a fa-lg mr-2 p-1"></i></button>
          </div>
          
          <div className='mr-5'>0</div>
        </div>
    </div>
   
  </div>

  <div className='flex justify-end mt-8'>
          <button className='rounded border border-grey-200 py-1 px-2.5 mr-2 text-light-blue hover:text-dark-blue shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Cancel </button>
          <button className='rounded border border-grey-200 py-1 px-2.5 bg-gradient-to-r from-dark-blue to-light-blue text-white shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Update </button>
        </div>


</div>

</div>
          {props.children}
        </div>
      </div>
    ) :"";
  }

export default EditGroup