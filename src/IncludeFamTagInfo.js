import React from 'react'
import { useState } from 'react';
//import Tooltip from '@mui/material/Tooltip';




function FamilyTaggingInfo(props) {
    const [buttonFamilyTaggingInfo, setButtonFamilyTaggingInfo] = useState(false);
    return (props.trigger) ? (
      <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
        <div className='popup-inner relative bg-white w-full max-w-2xl '>
          <button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button>
          <div trigger={buttonFamilyTaggingInfo} setTrigger= {setButtonFamilyTaggingInfo}>
          <div className="modal-header flex p-4 border-b border-gray-200">
            <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Include Family Definitions</h5>    
          </div>
          
          <div className="modal-body relative p-4 text-left ml-2">

            <div className='border-b pb-3 flex '>
            <div className='mt-1 text-sm text-center'>Enabling the 'Tagging with Family' feature- Ensures that when one family member is tagged then all other documents within the family have that same field applied</div> 
              
            </div>

            <div className='border-b pb-3 flex mt-2'>
            <div className='mt-3'><i class="fa-solid fa-user fa-2xl mt-4 text-dark-blue"></i></div> 
                <div className='ml-4'>
                    <span className='font-semibold'>Without Include Family Option</span> 
                    <div className=' '><i class="fa-regular fa-square-check fa-lg text-dark-blue"></i> <span className='text-sm'>Parent 1</span></div> 
                    <div className='ml-4 '><i class="fa-regular fa-square fa-lg text-dark-blue"></i> <span className='text-sm'>Child 1</span></div> 
                    <div className='ml-4 '><i class="fa-regular fa-square fa-lg text-dark-blue"></i> <span className='text-sm'>Child 2</span></div> 
                </div>
            </div>

            <div className='border-b pb-3 flex mt-2'>
            <div className='mt-3'><i class="fa-solid fa-users fa-2xl mt-4 text-dark-blue"></i></div> 
                <div className='ml-4'>
                    <span className='font-semibold'>Include Family Option</span> 
                    <div className=' '><i class="fa-regular fa-square-check fa-lg text-dark-blue"></i> <span className='text-sm'>Parent 1</span></div> 
                    <div className='ml-4 '><i class="fa-regular fa-square-check fa-lg text-dark-blue"></i> <span className='text-sm'>Child 1</span></div> 
                    <div className='ml-4 '><i class="fa-regular fa-square-check fa-lg text-dark-blue"></i> <span className='text-sm'>Child 2</span></div> 
                </div>
            </div>

            
            

            

            <div className='flex justify-end mt-6'>
                <button onClick={() => props.setTrigger(false)} className='rounded border border-grey-200 py-1 px-2.5 mr-2 text-light-blue hover:text-dark-blue shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Close </button>
                
            </div>
          </div>


        </div>
         
          {props.children}
        </div>
      </div>
    ) :"";
  }

export default FamilyTaggingInfo